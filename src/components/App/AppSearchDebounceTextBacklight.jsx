import React, { Component } from 'react'
import css from './AppSearchDebounceTextBacklight.module.css'
import data from '@/json/cards_10-10.json'


import debounce from "lodash.debounce";


export class AppSearchDebounceTextBacklight extends Component {
	state = {
		inputValue: '',
		filteredArray: data
	}
	// handleChange = debounce((event) => { }, 500);//! так не працює

	//! 3.Винесимо всю логіку фільтрації в окремий метод:
  performSearch = textInput => {		

		const filteredArray = data.filter(item => item.title.toLowerCase().includes(textInput.toLowerCase().trim()))
		
		console.log('Відфільтрований масив: ', filteredArray)
		
		this.setState({
			filteredArray
		})
	}
	//! 4.Створюємо debounce як class property:
	debouncedSearch = debounce((text) => {
    console.log("⏰debounce_text", text);
    this.performSearch(text);
  }, 500);

	handleChange = event => {
		//! Деструктуризуємо:
		const { name, value } = event.currentTarget
		console.log('name:', name)

		console.log('value:', value)

		//! Використовуємо властивості об'єкта, що обчислюються
		//! Зберігаємо значення інпутів в state
		this.setState({
			[name]: value
		})
		//! _____________Логіка фільтрації___________
		// const filteredArray = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase().trim()))
		// console.log('Відфільтрований масив: ', filteredArray)
		// this.setState({
		// 	filteredArray
		// })
		//! _________________________________________

		//! 6.2 Запуск debounce з логікою фільтрації:
    this.debouncedSearch(value);

	}
	//! 5.Припинення debounce:
 	componentWillUnmount() {
    this.debouncedSearch.cancel();
  };

	//* Функція підсвічування тексту
  highlightText = (text, keyword) => {
    if (!keyword) return text;

    const regex = new RegExp(`(${keyword})`, "gi");

    return text
      .split(regex)
      .map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase()
          ? (
            <span
              key={index}
              className={css.highlight}
            >
              {part}
            </span>
          )
          : part
      );
  };

//* Якщо користувач буде вводити: . + * ? [ ] ( )
  //* то RegExp потрібно екранувати допоміжною функцією:
  escapeRegExp = (str) => {
    return str.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );
  };

  //* Використання RegExp з екрануванням допоміжною функцією:
  highlightTextProtection = (text, keyword) => {
    if (!keyword) return text;

    const escapedKeyword = this.escapeRegExp(keyword);

    const regex = new RegExp(
      `(${escapedKeyword})`,
      "gi"
    );

    return text
      .split(regex)
      .map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase()
          ? (
            <span
              key={index}
              className={css.highlight}
            >
              {part}
            </span>
          )
          : part
      );
  };

	//* Функція для відмінювання слова “картка”
  getWordForm = (number, words) => {
    const n = Math.abs(number) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return words[2];
    if (n1 > 1 && n1 < 5) return words[1];
    if (n1 === 1) return words[0];
    return words[2];
  };


	render() {
		const { inputValue, filteredArray } = this.state

		// filteredArray = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase().trim()))


		console.log('----------------------------------------------')
		console.log('✅Картки json: ', data)
		console.log('🎯Значення введене в інпут: ', inputValue)
		console.log('Відфільтрований масив: ', filteredArray)
		console.log('______________________________________________')

		return (
			<>
				<input
					className={css.inputSearch}
					type='text'
					name='inputValue'
					value={inputValue}
					onChange={this.handleChange}
					// onChange={debounce(this.handleChange, 500)} //! так не працює
				/>
				{/* <p className={css.cardsCounter}>Знайдено:{filteredArray.length} картки</p> */}
				<p className={css.cardsCounter}>
					Знайдено: {filteredArray.length} {this.getWordForm(filteredArray.length, ['картка', 'картки', 'карток'])}
					</p>
				<ul className={css.cards}>
					{filteredArray.map(item => (
						<li className={css.card} key={item.id}>
							{/* <h3>{item.title}</h3> */}
						{/* <h3>{this.highlightText(item.title, inputValue)}</h3> */}
						<h3>{this.highlightTextProtection(item.title, inputValue)}</h3>
							<p>{item.body}</p>
						</li>
					))}
				</ul>
			</>
		)
	}
}
