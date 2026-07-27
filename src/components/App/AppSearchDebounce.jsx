import React, { Component } from 'react'
import css from './AppSearchDebounce.module.css'
import data from '@/json/cards_10-10.json'

export class AppSearchDebounce extends Component {
	state = {
		inputValue: '',
		filteredArray: data
	}
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
		//! Логіка фільтрації
		const filteredArray = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase().trim()))
		console.log('Відфільтрований масив: ', filteredArray)
		this.setState({
			filteredArray
		})
	}
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
