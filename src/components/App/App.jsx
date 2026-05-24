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
import { id } from 'date-fns/locale'

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
		aircraftId: null, //! "id" обраного елемента
		// indicesSelectedModels: [] //! масив індексів обраних моделей
		indicesSelectedModels: JSON.parse(localStorage.getItem("indicesSelectedModels")) || [],

	}

	// * 2 При першому завантажені якщо нічого не має  у властивість стейту, то створюємо пустий масив який записуємо у LocalStorage
	componentDidMount() {
		console.log('Спрацював componentDidMount');
        const saved = localStorage.getItem("indicesSelectedModels");
        if (!saved) {
            localStorage.setItem("indicesSelectedModels", JSON.stringify([]));
        }
    };

// * 3 При будь яких змінах властивості selectedButtonIdx, записуємо selectedButtonIdx у LocalStorage

	componentDidUpdate(prevProps, prevState) {
		console.log('Спрацював componentDidUpdate');

        if (prevState.indicesSelectedModels !== this.state.indicesSelectedModels) {
            localStorage.setItem(
                "indicesSelectedModels",
                JSON.stringify(this.state.indicesSelectedModels)
            );
        }
    };

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

		const planesArray = aircrafts.filter(item => item.aircraftType === "plane");

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
		// const selectedModels = this.state.indicesSelectedModels.flatMap((id) => aircrafts.filter((element) => element.id === id));

		//? Коли натиснута кнопка кошик, aircraftsArray треба замінити з aircrafts на selectedModels
		//? А коли вона не активна то в aircraftsArray кладемо значення яке вираховується кожною кнопкою фільтрів (окрім)

		console.log('Кошик')
		// console.log('Selected Models: ', selectedModels);

		this.setState({
			// aircraftsArray: selectedModels,
			aircraftTitle: 'Кошик',
			activeButton:'cartButton',
			bgColor: '#ff991c91'
		})
	}
	getActiveId = id =>{
		this.setState({
			aircraftId: id
		})
					if ( this.state.indicesSelectedModels.includes(id)){
				//! 1 Масив this.state.indicesSelectedModels
				//! 2 Індекс - id
				//! 3 З масиву this.state.indicesSelectedModels потрібно видалити елемент з 	індексом який дорівнює id
						//activeButtonid: id, //! це буде останній активний елемент. 
				this.setState({
					indicesSelectedModels: this.state.indicesSelectedModels.filter((item) => item !== id), 
				}) 
				}
			else{
				//! 1 Масив this.state.indicesSelectedModels
				//! 2 Індекс - id
				//! 3 З масиву this.state.indicesSelectedModels потрібно додати елемент з індексом який дорівнює id
	
					//? Створюємо новий масив, у який копіюмо всі елементи зі старого масиву та додаємо до них новий елемент
				this.setState({
					// activeButtonid: id,
        	indicesSelectedModels: this.state.indicesSelectedModels.concat(id).sort((a, b) => a - b)
				})
			}
	}
//* Для того щоб функція getActiveId, впливала (перерендирила його) на компонент planesList треба, щоб змінилися пропси які безпосередньо впливать на рендер цього компоненту 
	
	render() {
		
		//! [1] Блок диструктуризації props та state 
		const {
		aircraftsArray, // aircrafts,
		aircraftTitle, // 'Магазин моделей літаків та вертольотів',
		activeButton, // 'allButton',
		bgColor, // 'white',
		aircraftId, // "id" обраного елемента
		indicesSelectedModels // масив індексів обраних моделей
		} = this.state;


		//! [2] Блок обчислювальних дaних 
		//* Кількість обраних моделей
		const numberOfSelectedModels = indicesSelectedModels.length;
		
		const selectedModels = this.state.indicesSelectedModels.flatMap((id) => aircrafts.filter((element) => element.id === id));

		//! [3] Блок консолей необхідних даних 
		console.log('AircraftsArray: ', aircraftsArray);
		console.log('🆔 aircraftId State: ', aircraftId);
		console.log('Ⓜ️ Indices Selected Models: ', indicesSelectedModels);
		console.log('Selected Models: ', selectedModels);

		console.log('Кількість обраних моделей: ', numberOfSelectedModels);
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
					numberOfSelectedModels={numberOfSelectedModels}
					
				/>

				<Section
					bgColor={this.state.bgColor}
					title={this.state.aircraftTitle}
					numberOfSelectedModels={numberOfSelectedModels}

				>
					
					<PlanesList 
					// items={this.state.aircraftsArray}



					// items={aircraftTitle === 'Кошик'
					// 	? selectedModels
					// 	: aircraftsArray
					// }

						
					// itemsCart={this.state.indicesSelectedModels.flatMap((id) => aircrafts.filter((element) => element.id === id))}  
					
					// ! перевірити кількість обраних моделей в  numberOfSelectedModels, якщо він === 0 то title === "Кошик пустий" і ul не ренберемо, а якщо numberOfSelectedModels є хочаб 1 обрана модель то тоді title === "Кошик" і ul ренберемо

					items={
						aircraftTitle === 'Кошик'
						
						? selectedModels
						: aircraftsArray
					}

					numberOfSelectedModels={numberOfSelectedModels}
					aircraftTitle = {aircraftTitle}
					itemsCart={selectedModels}
					indicesSelectedModels={indicesSelectedModels}
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
