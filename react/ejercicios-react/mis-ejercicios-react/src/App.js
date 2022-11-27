import React from "react";
import PadreEjercicioCards from "./EjercicioCards/PadreEjCards";

function App() {
  return (
    <div>
      <PadreEjercicioCards />
    </div>
  );
}

export default App;

/*Ejercicio Desafío*/
// import React, {useState} from 'react';
// import "./desafio/style.css";

// import DesafioPadre from "./desafio/desafioPadre";

//  function App() {
//    return (
//     <body>
//      <div className="BodyDiv">
//       <DesafioPadre/>
//      </div>
//      </body>
//   );
// }
// export default App;

/* EJERCICIO 3 del R3*/
//  import React, { useState} from 'react';
// import InputComponente from "./ejercicios-r3/ejercicio3/InputComponente"
// import NewComponentShowArray from "./ejercicios-r3/ejercicio3/ComponenteMostrar"

//  function App() {
//   const [numIngresadoApp,setnumIngresadoApp] = useState([]);
//   const [myArray, setmyArray] = useState([]);

//   const HandleInput=(event)=> {
//     setnumIngresadoApp(event.target.value);
//  }

//  const IngresarAlNumArray=()=> {
//     setnumIngresadoApp('');
//     setmyArray(myArray=>myArray.concat(numIngresadoApp));
//   }

//    return (
//      <div className="App">
//       <InputComponente numeroingresado={numIngresadoApp} onChange={HandleInput} onClick={IngresarAlNumArray}/>
//       <NewComponentShowArray arreglo={myArray}/>
//      </div>
//   );
// }
//  export default App;

/****Ejercicio 2 del R2 *****/
// import { getValue } from '@testing-library/user-event/dist/utils';
// import React, { useState} from 'react';
//  import BotonModal from './ejercicios-r2/ejercicio2/ejercicio2';
// import Modal from './ejercicios-r2/ejercicio2/modal';

//  function App() {
//   // declarar el useState true o false
//   // declarar una funcion que haga el toggle
//   // setEstado(!estado)
//   const [estadoActivacion, setestadoActivacion ] = useState(false);

//   const mostrarModal =()=> {
//     setestadoActivacion (!estadoActivacion);
//     // console.log("Cambio de estado",estadoActivacion);
//   }
//    return (
//      <div className="App">
//       <h1>Ejercicio 2 del R2</h1>
//        <BotonModal onChange={mostrarModal}/>
//        <Modal estado={estadoActivacion}/>

//      </div>
//   );
// }
//  export default App;

//***Ejercicio Colores***//
// import './App.css';
// import Colores from './ej-Colores/colores';

// function App() {
//   return (
//     <div className="App">
//       <Colores/>
//     </div>
//   );
// }

// export default App;

// Ejercicio Contador
// import './App.css';
// import Contador from './Contador/Contador'

// function App() {
//   return (
//     <div className="App">
//       <Contador/>
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
