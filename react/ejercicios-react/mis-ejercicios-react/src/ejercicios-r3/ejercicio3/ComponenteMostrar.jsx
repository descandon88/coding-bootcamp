/// Continuación del ejercicio 2. En vez de visualizar los números en el mismo componente, crear un componente nuevo y pasarle por props el array de números para que ese componente se encargue de mostrarlos. 
import React, {useState} from 'react';

function NewComponentShowArray (props) {
    const myArraytemp=props.arreglo;
    return (
        <div>
            <h2>Mostrar Números Ingresados en 2do Componente</h2>
            <ul>
                {/* {props.arreglo} */}
               {(myArraytemp).map(myArraytemp => (
                <li>{myArraytemp}</li>
                ))} 
            </ul>
        </div>)
}
export default NewComponentShowArray;

/**Ejercicio 2 del R3 */
// import {useState} from 'react';
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