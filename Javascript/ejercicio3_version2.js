
//Ejercicio #3 - VERSION CON FOR PARA GENERACION DE UN ARREGLO CON FOR
// Escribir un programa que lea 10 notas de alumnos y nos informe cuántos
// tienen notas mayores o iguales a 7 y cuántos menores.

// hacer un for de 10 de length, que haga un push dentro del array. 
let lista_iter= []
for (let index = 0; index < 10; index++) {
   
    lista_iter[index] = parseInt(Math.random()*10+1);
       
}
console.log(lista_iter);

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

calification(lista_iter);