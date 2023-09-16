import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import CalculatorPage from './CalculatorPage';
import ProjectPage from './ProjectPage';

function App() {
  return (
    <div className="App">
      {/* router nav below includes CalculatorPage and ProjectPage */}
      <BrowserRouter>
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
          <a href="/" className="pl-8">Carbon Offset Calculator</a>
          <div className="px-4 cursor-pointer md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          <div className="pr-8 md:block hidden">
            <a href="/projects" className="p-4">Projects</a>
            <a href="/" className="p-4">Calculator</a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
