import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Male from './Male';
import Female from './Female';
import HairWhite from './HairWhite';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
     <Routes>
       <Route path='/' element={<Hero/>}/>
       <Route path='/randompeople' element={<Hero/>}/>
       <Route path='/male' element={<Male/>}/>
       <Route path='/female' element={<Female/>}/>
       <Route path='/hairwhite' element={<HairWhite/>}/>
     </Routes>
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;
