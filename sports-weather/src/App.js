import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import MainSearchPage from './components/mainPage/MainSearchPage';
import StadiumDetails from './components/stadiumDetails/StadiumDetails';

function App() {
  return (
    <Router>
      <div className="dark:bg-gray-800 dark:text-gray-200 min-h-screen flex justify-center">
        <div className='max-w-screen-lg'>
          <h1 className="mb-4 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Stadium Weather App
          </h1>
          <Routes>
            <Route path='/' element={<MainSearchPage />} />
            <Route path="/stadium/:id/:name" element={<StadiumDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;