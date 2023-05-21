import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainSearchPage from './components/mainPage/MainSearchPage';
import StadiumDetails from './components/stadiumDetails/StadiumDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<MainSearchPage />} />
          <Route path='' element={<StadiumDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
