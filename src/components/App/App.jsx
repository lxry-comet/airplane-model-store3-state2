//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props ✅
//! 2.Коли змінюється state ✅

//* import '../../App.css'
import '@/App.css'
// import planes from '../../json/planes.json'

import aircrafts from '@/json/aircrafts.json'
// import planes from '@/json/planes.json'
// import helicopters from '@/json/helicopters.json'


import React, { Component } from 'react'


// import PlanesList from '../PlanesList/PlanesList.jsx'
import {Filter} from '@/components/Filter/Filter.jsx'
import PlanesList from '@/components/PlanesList/PlanesList.jsx'
// import Section from '../Section/Section.jsx'
import Section from '@/components/Section/Section.jsx'

import css from './App.module.css'

export class App extends Component {



	state = {
		
		aircraftsArray: aircrafts,

		// isAircrafts: false,
		// isPlain: false,
		// isHelicopter: false,

		bgColor: 'white',
	}

	allFiltration = () => {
		console.log('all')
		
		this.setState({

			aircraftsArray: aircrafts,

			// isAircrafts: true,
			// isPlain: false,
			// isHelicopter: false,
			bgColor: 'lightgreen'
		})
		console.log("aircrafts", aircrafts);

	}
	planeFiltration = () => {
		console.log('planeFiltration')

		const planesArray = aircrafts.filter(item => item.aircraftType === "plane" || item.aircraftType === "biplane");

		console.log("planesArray", planesArray);

		this.setState({
			
			aircraftsArray: planesArray,

			// isAircrafts: false,
			// isPlain: true,
			// isHelicopter: false,
			bgColor: 'yellow'
		})
	}
	helicopterFiltration = () => {
		console.log('helicopterFiltration')
		const helicopterArray = aircrafts.filter(item => item.aircraftType === "helicopter");

		console.log("helicopterArray", helicopterArray);

		this.setState({

			aircraftsArray: helicopterArray,


			// isAircrafts: false,
			// isPlain: false,
			// isHelicopter: true,
			bgColor: 'lightblue'
		})
	}
	render() {
		return (
			<>
				{/*//!  Filter */}
				{/* <div className={css.filterBox}>
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
				</div> */}

				<Filter
					onAll={this.allFiltration}
          onPlanes={this.planeFiltration}
          onHelicopters={this.helicopterFiltration}
				/>

				<Section
					// isOn={this.state.isAircrafts}
					bgColor={this.state.bgColor}
					title='Магазин моделей літаків та вертольотів'
				>
					<PlanesList items={this.state.aircraftsArray} />
				</Section>

				{/* <Section 
					isOn={this.state.isPlain}
					bgColor={this.state.bgColor}
				 	title='Магазин моделей літаків'
				>
					<PlanesList items={planes} />
				</Section>

				<Section
					isOn={this.state.isHelicopter}
					bgColor={this.state.bgColor}
					title='Магазин моделей вертольотів'
				>
					<PlanesList items={helicopters} />
				</Section> */}
			</>
		)
	}
}
