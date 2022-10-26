// Construir un componente que contenga un input con un botón "agregar".
// En el input se deberán cargar números y cuando se haga click en el botón se deberán
//agregar esos números a un array (utilizar useState).
//Visualizar esos números en el mismo componente
import React,{ useState} from 'react';


function InputComponente (props) {
    const [numIngresados ,  setnumIngresados] = useState([]);
   
 
   

    return( 
        <div className="ContainerInput">
            <h1>Ingresar Números</h1>
            <input name="numbers" value={props.numeroingresado} onChange={props.onChange}></input>
            <button onClick={props.onClick}>Summit</button>
            {/* <p>{myArray}</p>  */}
        
        </div>
    ); 

};

export default InputComponente;


// /*Ejercicio 2 del R3*/
// import { useState} from 'react';

// let nextIndex=0;

// function InputComponente () {
//     const [numIngresados, setnumIngresados] = useState([]);
//     const [myArray, setmyArray] = useState([]);
//     const ingresarNum=(event)=> {
//         setnumIngresados(event.target.value);
//     }
//     const IngresarAlNumArray=()=> {
//         // setmyArray(currentNumber => currentNumber.concat(" "+ numIngresados));
//         setnumIngresados('');
//         // setmyArray(myArray=>[...myArray, numIngresados]);
//         setmyArray(myArray=>myArray.concat(numIngresados));
//         nextIndex++;
//     }

//     return( 
//         <div className="ContainerInput">
//             <h1>Ingresar Números</h1>
//             <input name="numbers"  value={numIngresados}  onChange={ingresarNum}></input>
//             <button onClick={IngresarAlNumArray} >Summit</button>
//             {/* <p>{myArray}</p> */}
//             <ul>
//                 {myArray.map(myArray => (
//                 <li>{myArray}</li>
//                 ))}
//             </ul>
    
//         </div>
//     ); 

// };

// export default InputComponente;