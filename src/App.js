import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Recipe from './Component/Recipe/Recipe';
import Searched from './Component/Search/Searched';
import Footer from './Footer/Footer';
import Favorites from './Component/Favorites/Favorites'


function App() {
  return (
        <div className="app"> 
          <Router>
              <Header/>
              <Routes>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='/recipe/:nameid' element={<Recipe/>} />
                  <Route path='/searched/:searchTerm' element={<Searched/>} />
                  <Route path='/recipe/favorite' element={<Favorites/>} />
              </Routes>
              <Footer/>
          </Router>
        </div>
  );
}

export default App;
