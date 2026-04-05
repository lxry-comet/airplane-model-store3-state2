import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import {App} from './components/App/App.jsx'
import {AppColorBox} from './components/App/AppColorBox.jsx'
import { AppCounter } from './components/AppCounter/AppCounter.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter basename='/airplane-model-store3-state2'>
			{/* <App /> */}
			{/* <AppCounter /> */}
			<AppColorBox />
		</BrowserRouter>
	</StrictMode>
)
