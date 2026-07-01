import React, { Component } from 'react'
import css from './ComplexForms.module.css'

const INITIAL_STATE = {
	inputLogin: "",
	inputPassword: "",
};

export class ComplexForms extends Component {

state = { ...INITIAL_STATE };
//! Скидання state в початкове значення INITIAL_STATE
	reset = () => {
		this.setState({ ...INITIAL_STATE });
	};

	handleSubmit = event => {
		event.preventDefault();
		const {inputLogin, inputPassword} = this.state;
		console.log(`Login: ${inputLogin}, Password: ${inputPassword}`);
		// this.props.onSubmit({ inputLogin, inputPassword });
		this.props.onSubmit({ ...this.state });
		// form.reset();
		this.reset();  //! очищуємо поля всіх інпутів

	};

	handleChange = event => {
		
	//! Деструктуризуємо:
		const { name, value } = event.currentTarget;
		console.log("name:", name);

		console.log("value:", value);

		const text = event.target.value

		//! Використовуємо властивості об'єкта, що обчислюються
		//! Зберігаємо значення інпутів в state
		this.setState({
			[name]: value,
		});

	}
	render() {
		const {
			inputLogin,
			inputPassword
		} = this.state;

		console.log('----------------------------------------------')
			console.log("Значення inputLogin:", inputLogin);
			console.log("Значення inputPassword:", inputPassword);
		console.log('______________________________________________')

		return (
			<form
				className={css.loginForm}
				onSubmit={this.handleSubmit}
			>
				<label className={css.loginFormLabel} htmlFor='username'>
					Логін:
				</label>
				<input
					className={css.loginFormInput}
					type='text'
					id='username'
					name='inputLogin'
					value={inputLogin}
					onChange={this.handleChange}
				/>

				<label className={css.loginFormLabel} htmlFor='pwd'>
					Пароль:
				</label>
				<input
					className={css.loginFormInput}
					type='password'
					id='pwd'
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
