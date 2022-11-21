import React from 'react';
import HookCounter from "./components/hook-counter";
import './App.css'

function App() {

  return (
    <div>
    <h3>Estado con el Class useState</h3> 
     <hr/>
    <h3>Estado con el Hook useState</h3>
    <HookCounter/>
    </div>
  )
}

export default App
