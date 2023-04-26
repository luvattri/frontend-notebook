import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/js/sidebar';
import { Route, Routes } from 'react-router-dom';
import { Notes } from './components/notes/Notes';
import Home from './components/home/home/Home';
import NoMatchFound from './components/common/NoMatchFound';

function App() {
  return (
    <div>
      <div>
  <div>
    <div className="sidebar"> <Sidebar/> </div>
    <Routes>
      <Route path='/home' element= {<Home/>}></Route>
      <Route path='/notes' element= {<Notes/>}></Route>
      <Route path='*' element= {<NoMatchFound/>}></Route>
    </Routes>
    <div></div>
  </div>
    </div>
    </div>
  );
}

export default App;
