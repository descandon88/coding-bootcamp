// Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado).
//Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc

// let variable; 

// variable = 88 % 8  = 0; 
// console.log(variable);

function imprimirTerminos(){
    
    let total = 0;
    let i=0;
    let arreglo=[];
    while (arreglo.length <= 24 && total<=500) {
       total += 11; 
       if (total % 8 ===0) {
       arreglo[i]=total;
 
        }
        else { 
            arreglo.splice(i,1);
            
        }
        i++;
    };
    cleanArray = arreglo.filter(function () {
        return true
      });
    console.log(cleanArray);
    return cleanArray;
 
    
};
    
   