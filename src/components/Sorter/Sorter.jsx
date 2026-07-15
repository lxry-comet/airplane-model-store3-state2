import React, { Component } from 'react'
import css from './Sorter.module.css'

export class Sorter extends Component {
	state = {
		sort: 'brief',
		inputSearchPlaceholder: 'Введіть назву ЛА'
	}
	handleChange = event => {
		const radioButtonValue = event.target.value
		// console.log("🔤typeOf:",typeof radioButtonValue)
		let inputPlaceholder = ''

		switch (radioButtonValue) {
			case 'brief':
				inputPlaceholder = 'Введіть назву ЛА'
				break
			case 'nickname':
				inputPlaceholder = 'Введіть прізвисько ЛА'
				break
			case 'country':
				inputPlaceholder = 'Введіть країну виробник ЛА'
				break
			case 'year':
				inputPlaceholder = 'Введіть рік випуску ЛА'
				break
			default:
				inputPlaceholder = ''
				break
		}
		this.setState({
			sort: radioButtonValue,
			inputSearchPlaceholder: inputPlaceholder
		})
		this.props.onGetRadioButtonValue(radioButtonValue)
	}
	
	render() {
		const { inputSearch, onHandleChangeInputSearchValue } = this.props
		const { sort, inputSearchPlaceholder } = this.state

		console.log('----------------------------------------------')
		console.log('✅Sort: ', sort)
		console.log('🎯inputSearchPlaceholder: ', inputSearchPlaceholder)
		console.log('______________________________________________')

		return (
			<div className={css.sorterBox}>
				<h3 className={css.formTitle}>
					Вибір параметра для пошуку/фільтрації:
				</h3>
				<form>
					<label>
						<input
							type='radio'
							name='sort'
							value='brief'
							checked={sort === 'brief'}
							onChange={this.handleChange}
						/>
						Назва
					</label>
					<label>
						<input
							type='radio'
							name='sort'
							value='nickname'
							checked={sort === 'nickname'}
							onChange={this.handleChange}
						/>
						Прізвисько
					</label>
					<label>
						<input
							type='radio'
							name='sort'
							value='country'
							checked={sort === 'country'}
							onChange={this.handleChange}
						/>
						Країна виробник
					</label>
					<label>
						<input
							type='radio'
							name='sort'
							value='year'
							checked={sort === 'year'}
							onChange={this.handleChange}
						/>
						Рік випуску
					</label>
				</form>
				<input
					className={css.inputSearch}
					type='text'
					placeholder={inputSearchPlaceholder}
					value={inputSearch}
					onChange={onHandleChangeInputSearchValue}
				/>
			</div>
		)
	}
}
