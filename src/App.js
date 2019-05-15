import React from 'react';
import logo from './logo.svg';
import './App.css';
import './mapStyle.css';
//import DirectionsExample from './customMap';
import DirectionsExample from './customMapWithDropDown';

function App() {
  return (
    <div className="App">
     <DirectionsExample/>
    </div>
  );
}

export default App;
