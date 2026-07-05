import React, { Component } from 'react'
import css from './AppComplexForms.module.css'

import {ComplexForms} from '@/components/ComplexForms/ComplexForms.jsx'
import {ComplexFormsGenerationID} from '@/components/ComplexFormsGenerationID/ComplexFormsGenerationID.jsx'

export class AppComplexForms extends Component {

	//! Записати в свій state значення стейту дочернього компоненту ComplexForm
state = { 
	formInputLogin: "",
  formInputPassword: "",

 };
submitForm = ({
	inputLogin,
	inputPassword
}) => {
	// console.log("✅ SubmitForm: ", data)
	// const {inputLogin, inputPassword} = data;
	this.setState({
		formInputLogin: inputLogin,
		formInputPassword: inputPassword
	});
}
	render() {
		const {
		formInputLogin,
		formInputPassword
		} = this.state;

		console.log('----------------------------------------------')
			console.log("✅ Значення inputLogin:", formInputLogin);
   	 	console.log("✅ Значення inputPassword:", formInputPassword);
		console.log('______________________________________________')

		return (
		<>
			{/*//! 4.4.3.Складні форми */}
        {/* <ComplexForms
          // onSubmit={values => console.log(values)}
          onSubmit={this.submitForm}
        /> */}

				{/* //! + 4.4.4.Генерація Id елементів форми */}
        <ComplexFormsGenerationID onSubmit={this.submitForm} />
        <ComplexFormsGenerationID onSubmit={this.submitForm} />

		</>
		)
	}
}
