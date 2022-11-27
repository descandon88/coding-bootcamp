import React from 'react';
import HookCounter from "./components/hook-counters/hook-counter";
import HookCounter2 from "./components/hook-counters/hook-counter-2";
import './App.css'

function App() {

  return (
    <div>
    <h3>Estado con el Class useState</h3> 
     <hr/>
    <h3>Estado con el Hook useState</h3>
    <HookCounter2/>
    </div>
  )
}

export default App
