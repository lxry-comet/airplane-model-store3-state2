import React, { Component } from 'react'
import css from './ComplexFormsGenerationIDRadioButton.module.css'

import { nanoid } from 'nanoid'

const INITIAL_STATE = {
	inputLogin: '',
	inputPassword: '',
	experience: 'junior'
}

export class ComplexFormsGenerationIDRadioButton extends Component {
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

		//! Використовуємо властивості об'єкта, що обчислюються
		//! Зберігаємо значення інпутів в state
		this.setState({
			[name]: value
		})
	}
	// handleRadioButtonOnChange = event => {
	// 	// console.log("event.currentTarget:", event.currentTarget);
  //   // console.log("event.currentTarget.name:", event.currentTarget.name);
  //   // console.log("event.currentTarget.value:", event.currentTarget.value);

	// 	const { name, value } = event.currentTarget
	// 	console.log('name:', name)
	// 	console.log('value:', value)
	// 	//? name: experience
	// 	//? value: junior
	// 	//? radioButton
	// 	this.setState({
	// 		[name]: value
	// 	})
	// }
	render() {
		const { 
			inputLogin, 
			inputPassword, 
			experience 
		} = this.state

		console.log('----------------------------------------------')
		console.log('🛅 Значення inputLogin:', inputLogin)
		console.log('🛅 Значення inputPassword:', inputPassword)
		console.log('🛅 Значення experience: ',experience)

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
{/*//! + 4.4.5.Радіокнопки */}
                <label>
                    Junior
                    <input
                        type="radio"
                        name="experience"
                        value="junior"
                        checked={experience === 'junior'}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Middle
                    <input
                        type="radio"
                        name="experience"
                        value="middle"
                        checked={experience === 'middle'}
                        onChange={this.handleChange}
                       
                    />
                </label>

                <label>
                    Senior
                    <input
                        type="radio"
                        name="experience"
                        value="senior"
                        checked={experience === 'senior'}
                        onChange={this.handleChange}
                    />
                </label>

				<button className={css.loginButton} type='submit'>
					Login
				</button>
			</form>
		)
	}
}
