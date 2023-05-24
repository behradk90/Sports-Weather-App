import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import MainSearchPage from './components/mainPage/MainSearchPage';
import StadiumDetails from './components/stadiumDetails/StadiumDetails';

function App() {
  return (
    <Router>
      <div className="max-w-full dark:bg-gray-800 dark:text-gray-200 min-h-screen flex justify-center">
        <div className='max-w-screen-lg'>
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