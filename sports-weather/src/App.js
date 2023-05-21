import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import MainSearchPage from './components/mainPage/mainSearchPage';
import StadiumDetails from './components/stadiumDetails/stadiumDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={MainSearchPage} />
          <Route path='/stadium-details/:id' element={StadiumDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
