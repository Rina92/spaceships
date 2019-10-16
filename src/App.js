import React from 'react';
import Navigation from './components/Navi.js'
import 'tachyons';
import './App.css';

function App() {
  return (
    <div >
      <header>
       <p className='header'>SpaceX Launches</p>
       <Navigation />
      </header>
    </div>
  );
}

export default App;
