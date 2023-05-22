import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import MainSearchPage from './components/mainPage/MainSearchPage';
import StadiumDetails from './components/stadiumDetails/StadiumDetails';

function App() {
  return (
    <Router>
      <div>

        <h1>Stadium Weather App</h1>
        <Routes>
          <Route path='/' element={<MainSearchPage />} />
          <Route path="/stadium/:id/:name" element={<StadiumDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
