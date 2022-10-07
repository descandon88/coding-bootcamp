//Ejercicio 6 -De diez en diez

//Mostrar los múltiplos de 10 hasta el valor 1500. Debe aparecer en
//consola 10 - 20 -30 etc.
// Opción con Arrey
let value_array=[];
let tmp=0;
for (let index = 0; tmp < 1500; index++) {
    tmp+=10;
    value_array[index]=tmp;    
}
console.log(value_array);

// Opción con valores

let value=0;
for (let index = 0; value < 1500; index++) {
    value +=10;
    console.log(value);
}