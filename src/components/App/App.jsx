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
import {Sorter} from '@/components/Sorter/Sorter.jsx'
import css from './App.module.css'
import { id } from 'date-fns/locale'
import { CgOpenCollective } from 'react-icons/cg'

//! Приклад початкового сортування на ім'я (за полем name.brief)

const aircrafts2 = aircrafts; //! Це не окрема копія, це копія за посиланям

// const aircrafts2 = [...aircrafts]; //! Це окрема копія 
aircrafts2.sort((a, b) => a.name.brief.localeCompare(b.name.brief));

// aircrafts.sort((a, b) =>
//     a.name.brief.localeCompare(b.name.brief)
// );
console.log('🎯aircrafts', aircrafts);
console.log('🎯aircrafts2', aircrafts2);
//! Приклад початкового сортування за роком створення (за полем info.year)
// aircrafts2.sort((a, b) => a.info.year - b.info.year);

//! Сортування, в якому моделі, яких немає в наявності знаходяться в кінці списку
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");

//! 1) відокремити "білих"(є в наявночті) від "чорних" (немає в наявності), 
//! 2) Білі скласти на початку, а чорні в кінець

const white = aircrafts.filter(aircraft => aircraft.model.actualImages);
const black = aircrafts.filter(aircraft => !aircraft.model.actualImages);

console.log('white', white);
console.log('black', black);

const aircraftsNew = [...white, ...black];
console.log('⚡aircraftsNew', aircraftsNew);
// aircrafts.splice(0, aircrafts.length);
//? або
aircrafts.length = 0;
aircrafts.push(...aircraftsNew);
console.log('⚡aircrafts', aircrafts);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");

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

		inputSearchValue: "", //! значення inputSearch

		aircraftsArrAfterFiltration: aircrafts,  //! дубльоване значення aircraftsArr після фільтрації

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
    	inputSearchValue: "",

			aircraftsArray: aircrafts,
			aircraftsArrAfterFiltration: aircrafts,
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
    inputSearchValue: "",
			
			aircraftsArray: planesArray,
			aircraftsArrAfterFiltration: planesArray,

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
    inputSearchValue: "",

			aircraftsArray: biplanesArray,
			aircraftsArrAfterFiltration: biplanesArray,

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
    inputSearchValue: "",

			aircraftsArray: helicopterArray,
			aircraftsArrAfterFiltration: helicopterArray,

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
		//* Коли натиснута кнопка кошик, початковий масив для пошуку з інпутом є selectedModels 
		this.setState({
			// aircraftsArray: selectedModels,
    	inputSearchValue: "",
			aircraftTitle: 'Кошик',
			activeButton:'cartButton',
			bgColor: '#ff991c91',
			aircraftsArrAfterFiltration: this.state.indicesSelectedModels.flatMap((id) => aircrafts.filter((element) => element.id === id))
,
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
	handleChangeInputSearchValue = event => {
		const value = event.target.value;
		//! Початкові данні: aircrafts та значення input value
		
		//! Потрібно: перебрати масив aircrafts та на кожній ітерації порівняти input value та властивістю name.brief кожного елементу масиву

		//! Якщо знайдений збіг, то цей елемент додається в окремий масив, який після закінчення ітерації aircrafts буде рендеритись замість PlanesList

		// ! Після оновлення інпуту використати aircraftsArrAfterFiltration 

		//* Перерендер плейнлісту має відбутись тоді коли змінюється стан selectedModels. Для цього треба змінити indicesSelectedModels

		const searchInputList = this.state.aircraftsArrAfterFiltration.filter(
			item => item.name.brief.toLowerCase()
			.startsWith(value.toLowerCase().trim())
		);
		console.log("⚡searchInputList: ", searchInputList)
		this.setState({
			aircraftsArray: searchInputList,
    	inputSearchValue: value,
			// indicesSelectedModels:
			
		})
		
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
		indicesSelectedModels, // масив індексів обраних моделей
		inputSearchValue, // значення inputSearch
		aircraftsArrAfterFiltration
		} = this.state;


		//! [2] Блок обчислювальних дaних 
		//* Кількість обраних моделей
		const numberOfSelectedModels = indicesSelectedModels.length;
		
		//* логіка пошуку літаків згідно даних з інпуту
		// const searchInputList = aircrafts.filter(
		// 	item => item.name.brief.toLowerCase()
		// 	.startsWith(inputSearchValue.toLowerCase().trim())
		// );

		//! Кількість типів ЛА
		const totalTypes = aircraftsArray.length;
		//! Загальна кількість моделей ЛА
// 		const numberOfModelsArray =  aircraftsArray.map(item => Object.values(item.model.colorsPrice).filter(element => element > 0).length);

// 		const numberOfModels = numberOfModelsArray.reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);
		const numberOfModels =  aircraftsArray
		.map(item => Object.values(item.model.colorsPrice)
		.filter(element => element > 0).length)
		.reduce((previousValue, number) => {
    	return previousValue + number;
		}, 0);

		const selectedModels = indicesSelectedModels.flatMap((id) => aircrafts.filter((element) => element.id === id));

		const totalModels =  selectedModels
		.map(item => Object.values(item.model.colorsPrice)
		.filter(element => element > 0).length)
		.reduce((previousValue, number) => {
    	return previousValue + number;
		}, 0);
		
		//! [3] Блок консолей необхідних даних 
		console.log('AircraftsArray: ', aircraftsArray);
		console.log('🆔 aircraftId State: ', aircraftId);
		console.log('Ⓜ️ Indices Selected Models: ', indicesSelectedModels);
		console.log('Selected Models: ', selectedModels);

		console.log('Кількість обраних моделей: ', numberOfSelectedModels);


		console.log('0️⃣Кількість типів ЛА: ', totalTypes);

		// console.log('Масив загальних кількостей моделей ЛА: ', numberOfModelsArray );
		console.log('Загальних кількостей моделей ЛА: ', numberOfModels );

		console.log('0️⃣Загальна кількість моделей в кошику: ', totalModels);
		console.log("Значення inputSearch: ", inputSearchValue)

		// console.log("⚡⚡⚡searchInputList: ", searchInputList)

			console.log("🎯⚡✅aircraftsArrAfterFiltration: ", aircraftsArrAfterFiltration)

		return (
			<>
				<Filter
					onAll={this.allFiltration}
          onPlanes={this.planeFiltration}
					onBiplanes={this.biplaneFiltration}
          onHelicopters={this.helicopterFiltration}
					buttonActive={this.state.activeButton}
					onCart={this.cartFiltration}
					numberOfSelectedModels={numberOfSelectedModels}
				/>
				<Sorter
					inputSearch={inputSearchValue}
					onHandleChangeInputSearchValue={this.handleChangeInputSearchValue}
				/>	

				<Section
					bgColor={this.state.bgColor}
					title={this.state.aircraftTitle}
					allTypes={totalTypes} //! кількість типів ЛА
					numberOfModels={numberOfModels} //! загальна кількість моделей ЛА
					numberOfSelectedModels={numberOfSelectedModels}
					totalModels={totalModels}
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
						// :searchInputList
					}

					numberOfSelectedModels={numberOfSelectedModels}
					aircraftTitle = {aircraftTitle}
					itemsCart={selectedModels}
					indicesSelectedModels={indicesSelectedModels}
					onActiveId={this.getActiveId}
					/>
				</Section>
			</>
		)
	}
}
