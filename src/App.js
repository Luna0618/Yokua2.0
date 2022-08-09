import logo from './logo.svg';
import './App.css';
import React from 'react';

import {NavBar, Contact, DropDown, Home} from './Components';
import {About, Games} from './Containers';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <DropDown />
      <Home />
      <About />
      <Games />
      <Contact />
    </div>
  );
}

export default App;
