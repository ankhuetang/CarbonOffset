import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import CalculatorPage from './CalculatorPage';
import ProjectPage from './ProjectPage';
import Market from './Market/MarketDashboard';
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
					<Route path='/calculator' element={<CalculatorPage />} />
					<Route path='/projects' element={<ProjectPage />} />
					<Route path='/market' element={<Market />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
