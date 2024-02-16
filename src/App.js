
import './App.css';
import React, { useState,useEffect } from 'react';


import Result from './Components/Result';
const secretNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10

function App() {
const[number,setNumber]=useState("");


function handleChange(e){
  setNumber(e.target.value)
  }

  return (
   <div className='main'>
    <div className='head'>
      <label>
        Guess The Number Between 1 to 10...
      </label>
    </div>
    <input 
    className='input'
    type='number'
    onChange={handleChange}
    />
    <Result secretNumber={secretNumber} number={number} />
   </div>
  )
}

export default App;
