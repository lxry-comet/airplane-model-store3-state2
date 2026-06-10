import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// import {App} from './components/App/App.jsx'
// import {AppColorBox} from './components/App/AppColorBox.jsx'
// import { AppCounter } from './components/AppCounter/AppCounter.jsx'

import './index.css'



//! Aбсолютний шлях + Реекспорт
import {
  App,
	// AppCounter,
  // AppColorBox,
  // AppSearchDebounce, //! Пошук елементів + Debounce
  // AppSearchDebounceTextBacklight, //! Пошук елементів + Debounce + Підсвічування тексту
  AppUncontrolledElementsForm, //! 4.4.1.Неконтрольовані елементи форм
  // AppControlledElementsForm, //! 4.4.2.Контрольовані елементи форм
  // AppComplexForms //! 4.4.3.Складні форми
} from '@/components/App';



createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter basename='/airplane-model-store3-state2'>
{/* <App /> */}
        {/* <AppColorBox />  */}
        {/* <AppSearchDebounce /> */}
        {/* <AppSearchDebounceTextBacklight /> */}
        <AppUncontrolledElementsForm 
				onSubmit={values => console.log(values)} 
				/>
        {/* <AppControlledElementsForm /> */}
        {/* <AppComplexForms onSubmit={values => console.log(values)} /> */}

		</BrowserRouter>
	</StrictMode>
)
