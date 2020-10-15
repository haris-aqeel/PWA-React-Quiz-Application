import React from 'react';
import './App.css';
import TakeData from './TakeData';
import {firebaseConfiguration} from './Services/firebaseService'
const App =  () => {
  {firebaseConfiguration()}
  return (

    <div className="App">
      <TakeData/>
    </div>
  );
}

export default App;
