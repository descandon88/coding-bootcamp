// 12. Tabla del #
//Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla
//de multiplicar del mismo (los primeros 12 términos)
// Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36

const NumeroRandom = () =>{
    let result = parseInt(Math.random()*10+1);
    console.log("El número escogido es: " + result);
    return result;
}

const TablaDeNnumeros = (n) => {
    let value = 0;
    console.log("Tabla de Multiplicar del "+ n);
    for (let index = 0; index < 13; index++) {
        value = index*n;
        console.log(n + " x "+index + " = " + value);  
    }
};

TablaDeNnumeros(NumeroRandom());


