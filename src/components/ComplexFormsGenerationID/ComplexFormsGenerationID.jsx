import React, { Component } from 'react'
import css from './ComplexFormsGenerationID.module.css'

import { nanoid } from 'nanoid'

const INITIAL_STATE = {
	inputLogin: '',
	inputPassword: ''
}

export class ComplexFormsGenerationID extends Component {
	state = { ...INITIAL_STATE }

	//! Для генерації Id елементів форми:
	//! Для кожного інпуту робимо окрему властивість класу:
	loginInputId = nanoid()
	passwordInputId = nanoid()

	//! Скидання state в початкове значення INITIAL_STATE
	reset = () => {
		this.setState({ ...INITIAL_STATE })
	}

	handleSubmit = event => {
		event.preventDefault()
		const { inputLogin, inputPassword } = this.state
		console.log(`Login: ${inputLogin}, Password: ${inputPassword}`)
		// this.props.onSubmit({ inputLogin, inputPassword });
		this.props.onSubmit({ ...this.state }) //! Тут відбувається виклик функції з AppComplexForm submit({ ...this.state })
		// form.reset();
		this.reset() //! очищуємо поля всіх інпутів
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
		const { inputLogin, inputPassword } = this.state

		console.log('----------------------------------------------')
		console.log('🛅 Значення inputLogin:', inputLogin)
		console.log('🛅 Значення inputPassword:', inputPassword)
		console.log('______________________________________________')

		return (
			<form className={css.loginForm} onSubmit={this.handleSubmit}>
				<label 
				className={css.loginFormLabel} 
				// htmlFor='username'
				htmlFor={this.loginInputId} //? для генерації Id елементів форми
				>
					Логін:
				</label>
				<input
					className={css.loginFormInput}
					type='text'
					// id='username'
					id={this.loginInputId} //? для генерації Id елементів форми
					name='inputLogin'
					value={inputLogin}
					onChange={this.handleChange}
				/>

				<label 
				className={css.loginFormLabel}
				// htmlFor='pwd'
				htmlFor={this.passwordInputId} //* для генерації Id елементів форми
				>
					Пароль:
				</label>
				<input
					className={css.loginFormInput}
					type='password'
					// id='pwd'
					id={this.passwordInputId} //* для генерації Id елементів форми

					name='inputPassword'
					value={inputPassword}
					onChange={this.handleChange}
				/>

				<button className={css.loginButton} type='submit'>
					Login
				</button>
			</form>
		)
	}
}
