// Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado).
//Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc

let array = [11,22,33,44,55,66,77]; 

array.forEach(myfuncion); 

function myfuncion(item) {
    multiploDeOcho = item%8;
}