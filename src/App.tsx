import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterList from './pages/charactersList';
import {Routes, Route} from 'react-router'
import Character from './pages/character';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element= {<CharacterList/>}/>
      <Route path='/:id' element= {<Character/>}/>
</Routes>
    </div>
  );
}

export default App;
