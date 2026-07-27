import React, { Component } from 'react'
import css from './AppSearchDebounce.module.css'
import data from '@/json/cards_10-10.json'

export class AppSearchDebounce extends Component {
	state = {
		inputValue: ''
	}
	handleChange = event => {
		//! Деструктуризуємо:
		const { name, value } = event.currentTarget
		console.log('name:', name)

		console.log('value:', value)

		const text = event.target.value

		//! Використовуємо властивості об'єкта, що обчислюються
		//! Зберігаємо значення інпутів в state
		this.setState({
			[name]: value
		})
	}
	render() {
		const { inputValue } = this.state

		console.log('----------------------------------------------')
		console.log('✅Картки json: ', data)
		console.log('🎯Значення введене в інпут: ', inputValue)
		// console.log("✅radioButtonValue:", radioButtonValueApp)
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
					{data.map(item => (
						<li className={css.card}>
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</li>
					))}
				</ul>
			</>
		)
	}
}
