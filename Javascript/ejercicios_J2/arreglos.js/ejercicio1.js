//1. A sumar elementos en un arreglo
//
//• Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
//El valor acumulado de todos los elementos del vector.
// El valor acumulado de los elementos del vector que sean mayores a 36.
// Cantidad de valores mayores a 50.

// Generación del vector
let vector= [];
for (let index = 0; index < 8; index++) {
    vector[index] =parseInt(Math.random()*100+1);    
}
console.log(vector);

const programaVector =(vector) => {
    let sum=0;
    let mayor36=[];
    let sum36=0;
    let mayor50=[];
    let sum50=0;
    for (let index = 0; index < vector.length; index++) {
        sum+=vector[index];
        
    };
    
    mayor36=vector.filter(numero => numero >=36);
    mayor50=vector.filter(numero => numero >=50);

    
    for (let index = 0; index < mayor36.length; index++) {
        sum36 += mayor36[index];
        
    };
    for (let index = 0; index < mayor50.length; index++) {
        sum50 += mayor50[index];
        
    };
    console.log("Valor acumulado de todos los elementos del vector: ", sum);
    console.log("Los valores mayores a 36 son: ", mayor36);
    console.log("Valores acumulador de los valores mayores a 36: ", sum36);
    console.log("Los valores mayores a 36 son: ", mayor50);
    console.log("Valores acumulador de los valores mayores a 36: ", sum50);
};


programaVector(vector);

