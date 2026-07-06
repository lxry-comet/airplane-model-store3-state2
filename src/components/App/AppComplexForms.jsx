import React, { Component } from 'react'
import css from './AppComplexForms.module.css'

import {ComplexForms} from '@/components/ComplexForms/ComplexForms.jsx'
import {ComplexFormsGenerationID} from '@/components/ComplexFormsGenerationID/ComplexFormsGenerationID.jsx'
import {ComplexFormsGenerationIDRadioButton} from "@/components/ComplexFormsGenerationIDRadioButton/ComplexFormsGenerationIDRadioButton.jsx"

export class AppComplexForms extends Component {

	//! Записати в свій state значення стейту дочернього компоненту ComplexForm
state = { 
	formInputLogin: "",
  formInputPassword: "",
	formRadioButtonExperience: ""
 };
submitForm = ({
	inputLogin,
	inputPassword,
	experience
}) => {
	// console.log("✅ SubmitForm: ", data)
	// const {inputLogin, inputPassword} = data;
	this.setState({
		formInputLogin: inputLogin,
		formInputPassword: inputPassword,
		formRadioButtonExperience: experience
	});
}
	render() {
		const {
		formInputLogin,
		formInputPassword,
		formRadioButtonExperience
		} = this.state;

		console.log('----------------------------------------------')
			console.log("✅ Значення inputLogin:", formInputLogin);
   	 	console.log("✅ Значення inputPassword:", formInputPassword);
   	 	console.log("✅ Значення experience:", formRadioButtonExperience);
		console.log('______________________________________________')

		return (
		<>
			{/*//! 4.4.3.Складні форми */}
        {/* <ComplexForms
          // onSubmit={values => console.log(values)}
          onSubmit={this.submitForm}
        /> */}

				{/* //! + 4.4.4.Генерація Id елементів форми */}
        {/* <ComplexFormsGenerationID onSubmit={this.submitForm} />
        <ComplexFormsGenerationID onSubmit={this.submitForm} /> */}

				{/*//! + 4.4.5.Радіокнопки */}
        <ComplexFormsGenerationIDRadioButton onSubmit={this.submitForm} />
		</>
		)
	}
}
