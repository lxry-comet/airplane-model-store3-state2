import React, { Component } from 'react'
import css from './AppComplexForms.module.css'

const INITIAL_STATE = {
  inputLogin: "",
  inputPassword: "",
};

export class AppComplexForms extends Component {

state = { ...INITIAL_STATE };
//! Скидання state в початкове значення INITIAL_STATE
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

	handleSubmit = event => {
    event.preventDefault();
    // const form = event.currentTarget;
    // const login = form.elements.login.value;
    // const password = form.elements.password.value;
    // console.log(login, password);
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

		// console.log("event.currentTarget:", event.currentTarget);
    // console.log("event.currentTarget.name:", event.currentTarget.name);
    // console.log("event.currentTarget.value:", event.currentTarget.value);

		const text = event.target.value
		// console.log('event.target.value:', text)
		
		// this.setState({
		// 	inputLogin: text
		// })

		//! Використовуємо властивості об'єкта, що обчислюються
		//! Зберігаємо значення інпутів в state
    this.setState({
      [name]: value,
    });

	}
	// handleChangePassword = event => {
	// 		//! Деструктуризуємо:
  //   const { name, value } = event.currentTarget;
  //   console.log("name:", name);

  //   console.log("value:", value);

	// 	const text = event.target.value
	// 	console.log('event.target.value:', text)
	// 	this.setState({
	// 		inputPassword: text
	// 	})
	// }
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
