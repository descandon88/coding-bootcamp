
//Ejercicio #3
// Escribir un programa que lea 10 notas de alumnos y nos informe cuántos
// tienen notas mayores o iguales a 7 y cuántos menores.

let notas=[7,5,7,5,8,8,8];
//let notes=array[Math.floor(Math.random()*10)]; 
const lista_notas = Array(10) 
				.fill()
				.map(() => parseInt(10 * Math.random())); 

console.log(lista_notas);


function calification(lista) {
    let count_7=0;
    let count_lower=0;
    for (let index = 0; index < lista.length; index++) {
      
        if (lista[index] >=7) {
            count_7++;
        }
        else {
            count_lower++;
        }
    };
    console.log("hay "+ count_7 +" notas superiores a 7");
    console.log("hay "+ count_lower+" notas inferiores a 7");

    // return count_7, count_lower;
};

calification(lista_notas);