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
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
