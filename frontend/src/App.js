import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import MarketplacePage from './MarketplacePage';
import CalculatorPage from './CalculatorPage';
import ProjectPage from './ProjectPage';
import Portfolio from './Portfolio/Portfolio';
import Home from './Home';
import Navbar from './Navbar';

function App() {
	return (
		<div className='App'>
			{/* router nav below includes CalculatorPage and ProjectPage */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/marketplace' element={<MarketplacePage />} />
					<Route path='/calculator' element={<CalculatorPage />} />
					<Route path='/projects' element={<ProjectPage />} />
					<Route path='/portfolio' element={<Portfolio />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
