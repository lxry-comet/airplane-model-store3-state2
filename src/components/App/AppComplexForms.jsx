import React, { Component } from 'react'
import css from './AppComplexForms.module.css'

import {ComplexForms} from '@/components/ComplexForms/ComplexForms.jsx'
import {ComplexFormsGenerationID} from '@/components/ComplexFormsGenerationID/ComplexFormsGenerationID.jsx'
import {ComplexFormsGenerationIDRadioButton} from "@/components/ComplexFormsGenerationIDRadioButton/ComplexFormsGenerationIDRadioButton.jsx"
import {ComplexFormsGenerationIDRadioButtonCheckboxesSelect} from "@/components/ComplexFormsGenerationIDRadioButtonCheckboxesSelect/ComplexFormsGenerationIDRadioButtonCheckboxesSelect.jsx"

export class AppComplexForms extends Component {

	//! Записати в свій state значення стейту дочернього компоненту ComplexForm
state = { 
	formInputLogin: "",
  formInputPassword: "",
	formRadioButtonExperience: "",
	formSelectAge: ""
 };
submitForm = ({
	inputLogin,
	inputPassword,
	experience,
	age
}) => {
	// console.log("✅ SubmitForm: ", data)
	// const {inputLogin, inputPassword} = data;
	this.setState({
		formInputLogin: inputLogin,
		formInputPassword: inputPassword,
		formRadioButtonExperience: experience,
		formSelectAge: age
	});
}
	render() {
		const {
		formInputLogin,
		formInputPassword,
		formRadioButtonExperience,
		formSelectAge
		} = this.state;

		console.log('----------------------------------------------')
			console.log("✅ Значення inputLogin:", formInputLogin);
   	 	console.log("✅ Значення inputPassword:", formInputPassword);
   	 	console.log("✅ Значення experience:", formRadioButtonExperience);
   	 	console.log("✅ Значення age:", formSelectAge);
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
        {/* <ComplexFormsGenerationIDRadioButton onSubmit={this.submitForm} /> */}
				{/*//! + 4.4.6.Чекбокси + 4.4.7.Селект */}
        <ComplexFormsGenerationIDRadioButtonCheckboxesSelect onSubmit={this.submitForm}/>
		</>
		)
	}
}
