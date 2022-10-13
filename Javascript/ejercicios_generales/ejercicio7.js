// Ejercicio 7
//  Realizar un programa que permita cargar dos listas de 3 valores cada
//una. Informar con un mensaje cuál de las dos listas tiene un valor
// acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas
// iguales’)
// Tener en cuenta que puede haber dos o más estructuras repetitivas en un
// algoritmo.
// EJERCICIO 7
//let list1 = [21,10,3,100];
let list2 = [21,10,3];

let list1= []
for (let index = 0; index < 3; index++) {
   
    list1[index] = parseInt(Math.random()*10+1);
       
}

function listaMayor(l1,l2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let index = 0; index < l1.length; index++) {
        sum1+=l1[index];
    }
    for (let index = 0; index < l2.length; index++) {
        sum2+=l2[index];    
    }
    if (sum1 > sum2) {
        console.log("Lista 1 Mayor");
    }
    else if (sum2 >sum1) {
        console.log("Lista 2 Mayor");

    }
    else {
        console.log("Listas iguales");

    }
    console.log( sum1, sum2);
}

listaMayor (list1, list2);
