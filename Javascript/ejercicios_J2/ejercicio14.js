// Ejercicio 14 - Postivos, Negativos o Múltiplos de 15
// Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// a) La cantidad de valores negativos ingresados.
// b) La cantidad de valores positivos ingresados.
// c) La cantidad de múltiplos de 15.
// d) El valor acumulado de los números ingresados que son pares.

const generadorNumero = () => { 
let val = []; 
for (let index = 0; index < 10; index++) {
   val[index] = parseInt (Math.floor(Math.random() * 201) -100);
    
}
console.log(val);
return val;
}
generadorNumero();

const PosNegMul15 = (num) => {
    let numNeg =0;
    let numPos =0;
    let numMul15=0;
    let numPares=0;
    
    numPos = num.filter(numero => numero >=0 );
    numNeg = num.filter(numero => numero <0 );
    numMul15 = num.filter(numero => numero%15===0);
    numPares = num.filter(numero => numero%2===0);

    console.log("Positivos: ",numPos.length);
    console.log("Negativos: ",numNeg.length);
    console.log("Múltiplo de 15: ",numMul15.length);
    console.log("Números Pares: ",numPares.length);

    return numNeg,numPos,numMul15;
    
}

PosNegMul15(generadorNumero());

