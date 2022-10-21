import React from 'react';
import { useState } from 'react';
import './Contador.css';

function Contador () {
    // let count= 0;
    const[count, setCount] = useState(0);

    const sumar =() => {
        setCount(count+1);
    }
    const restar =() => {
        setCount(count-1);
    }

    return (
        <div className="counterContainer">
            <span className="counterSpan">El contador vale: {count}</span>
            {console.log(count,"console log de html jsx")}
            <button className="counterButton" onClick={sumar}>+</button>
            <button className="counterButton" onClick={restar}>-</button>


        </div>
    );

}

export default Contador;