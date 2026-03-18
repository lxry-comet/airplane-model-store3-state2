//* import '../../App.css'
import '@/App.css'
// import planes from '../../json/planes.json'
import planes from '@/json/planes.json'

import React, { Component } from 'react'

import helicopters from '@/json/helicopters.json'
// import PlanesList from '../PlanesList/PlanesList.jsx'
import PlanesList from '@/components/PlanesList/PlanesList.jsx'
// import Section from '../Section/Section.jsx'
import Section from '@/components/Section/Section.jsx'

import css from './App.module.css'

export class App extends Component {
	state = {
		isPlain: false,
		isHelicopter: false
	}

	allFiltration = () => {
		console.log('all')
		this.setState({
			isPlain: true,
			isHelicopter: true
		})
	}
	planeFiltration = () => {
		console.log('planeFiltration')
		this.setState({
			isPlain: true,
			isHelicopter: false
		})
	}
	helicopterFiltration = () => {
		console.log('helicopterFiltration')
		this.setState({
			isPlain: false,
			isHelicopter: true
		})
	}
	render() {
		return (
			<>
				{/*//!  Filter */}
				<div className={css.filterBox}>
					<button
						className={css.buttonAllFiltration}
						type='button'
						onClick={this.allFiltration}
					>
						ВСІ
					</button>

					<button
						className={css.buttonPlaneFiltration}
						type='button'
						onClick={this.planeFiltration}
					>
						Літаки
					</button>

					<button
						className={css.buttonHelicopterFiltration}
						type='button'
						onClick={this.helicopterFiltration}
					>
						Вертольоти
					</button>
				</div>
				<Section isOn={this.state.isPlain} title='Магазин моделей літаків'>
					<PlanesList items={planes} />
				</Section>

				<Section
					isOn={this.state.isHelicopter}
					title='Магазин моделей вертольотів'
				>
					<PlanesList items={helicopters} />
				</Section>
			</>
		)
	}
}
