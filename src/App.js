import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Recipe from './Component/Recipe/Recipe';

function App() {
  return (
        <div className="app">
          <Router>
              <Header/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/recipe/:nameid' element={<Recipe/>} />
              </Routes>
          </Router>
        </div>
  );
}

export default App;
