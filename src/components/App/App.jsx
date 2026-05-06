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

	// ! План створення кошику:
	// * [1] Отримати реакцію на кнопку "Додати до кошику" (onClick)
	// * [2] Стврити в стейті масив індексів обраних елементів
	// * [3] З-за допомогою реакції на кнопку наповнювати масив індексів обраних елементів
	// * [4] Створити масив обраних елементів згідно з масиву індексів
	//  [5] Створити кнопку КОШИК
	// ? [5.1] Стилізувати кнопку КОШИК згідно з дизайном
	// * [6] При натисканы на кнопку кошиу, відбувається рендер масиву обраних елементів

	state = {
	
		aircraftsArray: aircrafts,
		aircraftTitle: 'Магазин моделей літаків та вертольотів',
		activeButton: 'allButton',
		bgColor: 'white',
		aircraftId: null //! "id" обраного елемента
	}

	allFiltration = () => {
		console.log('all')
		
		this.setState({

			aircraftsArray: aircrafts,
			aircraftTitle: 'Магазин моделей літаків та вертольотів',
			activeButton:'allButton',
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
			aircraftTitle: 'Магазин моделей літаків',
			activeButton:'planeButton',
			bgColor: 'lightgreen'
		})
	}
	biplaneFiltration = () => {
		console.log('biplaneFiltration')

		const biplanesArray = aircrafts.filter(item => item.aircraftType === "biplane");

		console.log("biplanesArray", biplanesArray);

		this.setState({
			aircraftsArray: biplanesArray,
			aircraftTitle: 'Магазин моделей біпланів',
			activeButton:'biplaneButton',
			bgColor: 'lightgreen'
		})
	}
	helicopterFiltration = () => {
		console.log('helicopterFiltration')
		const helicopterArray = aircrafts.filter(item => item.aircraftType === "helicopter");

		console.log("helicopterArray", helicopterArray);

		this.setState({

			aircraftsArray: helicopterArray,
			aircraftTitle: 'Магазин моделей вертольотів',
			activeButton:'helicopterButton',
			bgColor: 'lightgreen'
		})
	}
	cartFiltration = () => {
		console.log('Кошик')
				this.setState({

			// aircraftsArray: helicopterArray,
			aircraftTitle: 'Кошик',
			activeButton:'cartButton',
			bgColor: '#ff991c91'
		})
	}
	getActiveId = id =>{
		this.setState({
			aircraftId: id
		})
	}
	render() {
		
		//! [1] Блок диструктуризації props та state 
		const {
		aircraftsArray, // aircrafts,
		aircraftTitle, // 'Магазин моделей літаків та вертольотів',
		activeButton, // 'allButton',
		bgColor, // 'white',
		aircraftId // "id" обраного елемента
		} = this.state;

		//! [2] Блок обчислювальних дaних 

		//! [3] Блок консолей необхідних даних 
		console.log('AircraftsArray: ', aircraftsArray);
		console.log('#️⃣ aircraftId State: ', aircraftId);
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
					onBiplanes={this.biplaneFiltration}
          onHelicopters={this.helicopterFiltration}
					buttonActive={this.state.activeButton}
					onCart={this.cartFiltration}
				/>

				<Section
					bgColor={this.state.bgColor}
					title={this.state.aircraftTitle}
				>
					<PlanesList 
					items={this.state.aircraftsArray} 
					onActiveId={this.getActiveId}
					/>
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
