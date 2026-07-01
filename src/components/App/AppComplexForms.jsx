import React, { Component } from 'react'
import css from './AppComplexForms.module.css'

import {ComplexForms} from '@/components/ComplexForms/ComplexForms.jsx'

export class AppComplexForms extends Component {

state = { };

	render() {
		// const {

		// } = this.state;

		console.log('----------------------------------------------')
			// console.log("Значення inputLogin:", inputLogin);
   	 	// console.log("Значення inputPassword:", inputPassword);
		console.log('______________________________________________')

		return (
		<>
			{/*//! 4.4.3.Складні форми */}
        <ComplexForms
          onSubmit={values => console.log(values)}
          // onSubmit={this.submitForm}
        />

		</>
		)
	}
}
