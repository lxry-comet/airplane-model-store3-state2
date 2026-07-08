import React, { Component } from "react";
import css from './Sorter.module.css'

export class Sorter extends Component{
		state = {
		sort: 'brief'
	}
	handleChange = (e) => {
		this.setState({
			sort: e.target.value
		})
	}
	render() {
		const {inputSearch, onHandleChangeInputSearchValue} = this.props;
		const { sort } = this.state;
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
					placeholder='Введіть назву ЛА'
					value={inputSearch}
					onChange={onHandleChangeInputSearchValue}
				/>
			</div>
		)
	}
}
