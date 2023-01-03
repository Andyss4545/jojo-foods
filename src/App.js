import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';

function App() {
  return (
        <div className="app">
          <Router>
              <Header/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
              </Routes>
          </Router>
        </div>
  );
}

export default App;
