import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from "./Components/Contact";
import PageNotFound from './Components/PageNotFound';
import LoginFrom from './Components/LoginFrom';
import RegisterFrom from './Components/Register';
import StarWars from './Components/starwars';
import FunComponent from './Components/functionComponent';
import { useEffect, useState } from 'react';
import SearchPage from './Components/searchPage';

function App() {

  const [searchText,setSearchText] = useState("")

  return (
    <div className="App">
      <Navbar setSearchText={setSearchText}/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/login" element ={<LoginFrom/>}/>
        <Route path="/register" element ={<RegisterFrom/>}/>
        <Route path="/starwars" element={<StarWars/>}/>
        <Route path='/function' element={<FunComponent/>}/>
        <Route path='/searchpage' element={<SearchPage search={searchText}/>}/>
        <Route path="*" element ={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
