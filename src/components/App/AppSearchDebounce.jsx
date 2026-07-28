import React, { Component } from 'react'
import css from './AppSearchDebounce.module.css'
import data from '@/json/cards_10-10.json'


import debounce from "lodash.debounce";


export class AppSearchDebounce extends Component {
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
				<ul className={css.cards}>
					{filteredArray.map(item => (
						<li className={css.card} key={item.id}>
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</li>
					))}
				</ul>
			</>
		)
	}
}
