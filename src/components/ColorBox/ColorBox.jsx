import React, { Component } from "react";
import css from './ColorBox.module.css';

export class ColorBox extends Component {
	//* 1) Отримати індекс активного елементу 
	//! 2) Створити масив індексів активних(обраних) елементів
	//! 3) Створити масив обраних елементів згідно масивів індексів
	//! 4) Відрендерити масив обраних елементів

	state = {
		activeButtonIndex: null
	}

	getActiveIndex = (index) => {
		this.setState({
			activeButtonIndex: index
		})
		const selectedButtonsIdx = [index];
		const selectedButtonsArrayIdx = [];

		let a;
		a = a+1;
		console.log('SelectedButtonsIdx: ', selectedButtonsIdx);
		// console.log('Index: ', index);
		// console.log('Index-state: ', this.state.activeButtonIndex); //!❌ ТАК РОБИТИ не треба !!!!!


	}
		func = () => {
			console.log('Це фунуція func')
			return 'Це функція func'
		}
	render(){


		const {colorBoxes} = this.props;
		const {activeButtonIndex} = this.state;
		console.log('Index-render: ', activeButtonIndex);

		// console.log('ColorBoxes: ', colorBoxes);

		return(
			<div className={css.colorBoxContainer}>
				<h3 className={css.colorBoxTitle}>Вибір Кольорів</h3>

				<p className={css.colorBoxDescription}>Остнній доданий колір:	
					<span className={css.colorBoxSelectedColor}>{'red'}</span>
				</p>

				<div className={css.colorBox}>
					{colorBoxes.map((item, index) =>(
						<button 
						key={item.color}
						className={css.colorBoxButton} 
						style={{backgroundColor: item.color}}
						onClick={() => this.getActiveIndex(index)}
						// onClick={this.getActiveIndex(index)}❌
						// onClick={this.getActiveIndex}❌
						>
							{'off'}
							</button>
						))}
				</div>
			</div>
		)
	}
}