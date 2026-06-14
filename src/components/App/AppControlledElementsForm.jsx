console.log(
  "%c 4.4.2.Контрольовані елементи форм",
  "color: white; background-color: #D33F49",
);
import React, { Component } from "react";
import css from "./AppControlledElementsForm.module.css";


export class AppControlledElementsForm extends Component {
state = {
    inputValue: "",
  };
handleChange = event => {
	const text = event.target.value;
	console.log("event.target.value:", text);
		this.setState({
    inputValue: text,
	})
}

render() {
    const {
			inputValue,
		} = this.state;

		console.log("----------------------------------------------");
    console.log("Значення inputValue:", inputValue);
    console.log("______________________________________________");

		
    return (
      <>
        <input
          className={css.input}
          type="text"
					value={inputValue}
					// onChange={() => console.log('Подія onChange')}
					onChange={this.handleChange}
					
        />
        <h3 className={css.title}>Значення inputValue: {inputValue}</h3>
      </>
    );
  }
}