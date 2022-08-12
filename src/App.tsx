import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterList from './pages/charactersList';
import {Routes, Route} from 'react-router-dom'
import Character from './pages/character';
import { Search } from './pages/search';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element= {<CharacterList/>}/>
        <Route path='/search' element= {<Search/>}/>
      <Route path='/:id' element= {<Character/>}/>
</Routes>
    </div>
  );
}

export default App;
