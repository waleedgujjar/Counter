import React, { useState } from 'react';
import './App.css';
const App = () => {

  const [counter,setCouunter] = useState(0)

  const addvalue = () =>{
    setCouunter(counter + 1)
  }
  
  const removeValue = () =>{
    setCouunter(counter - 1)
  }
  return (
    <>
    <h1>React with waleed</h1>
    <h2>Counter Value: {counter} </h2>

    <button onClick={addvalue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App;

