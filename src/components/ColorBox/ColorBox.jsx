import React, { Component } from "react";
import css from './ColorBox.module.css';

export class ColorBox extends Component {
	
	state = {
		activeButtonIndex: null
	}

	getActiveIndex = (index) => {
		this.setState({
			activeButtonIndex: index
		})
		// console.log('Index-state: ', this.state.activeButtonIndex); ❌
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