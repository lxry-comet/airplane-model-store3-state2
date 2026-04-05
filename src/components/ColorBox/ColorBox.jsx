import React, { Component } from "react";
import css from './ColorBox.module.css';

export class ColorBox extends Component {
	render(){
		const {colorBoxes} = this.props;

		console.log('ColorBoxes: ', colorBoxes);

		return(
			<div className={css.colorBoxContainer}>
				<h3 className={css.colorBoxTitle}>Вибір Кольорів</h3>

				<p className={css.colorBoxDescription}>Остнній доданий колір:	
					<span className={css.colorBoxSelectedColor}>{'red'}</span>
				</p>

				<div className={css.colorBox}>
					{colorBoxes.map(item =>(
						<button 
						key={item.color}
						className={css.colorBoxButton} 
						style={{backgroundColor: item.color}}
						>
							{'off'}
							</button>
						))}
				</div>
			</div>
		)
	}
}