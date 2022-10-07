// Ejercicio 11. Tabla del 5
// Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).
const TablaDelCinco = (n) => {
    let value = 0;
    console.log("Tabla de Multiplicar del "+ n);
    for (let index = 0; index < 11; index++) {
        value = index*n;
        console.log(n + " x "+index + " = " + value);  
    }
};

TablaDelCinco(6);