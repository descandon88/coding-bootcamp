// Reportes de Salarios
// En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100
// y $500, realizar un programa que lea los sueldos que cobra cada
// empleado e informe cuántos empleados cobran entre $100 y $300 y
// cuántos cobran más de $300. Además el programa deberá informar el
// importe que gasta la empresa en sueldos al personal.

let lista_sueldos= []
let empleado=0;
for (let index = 0; index < 5; index++) {
   
    lista_sueldos[index] = Math.floor(Math.random()*(500 - 100)+100);
    empleado++;
       
}


console.log(lista_sueldos);
console.log(empleado);

function informar(sueldos,empleados) {
    let count_100_300=0;
    let count_plus_300=0;
    let sum=0;
    for (let index = 0; index < empleados.length; index++) {
        if(sueldos <=300) {
            count_100_300++;
            sum+=sueldos;
            console.log(sum);
        } 
        else {
            count_plus_300++;
            sum+=sueldos;
        }
        
    }
    console.log("Cantidad de empleados que ganan entre 100 y 300 es de: ", count_100_300);
    console.log("El suma total de sueldos que gasta la empresa es de: "+sum);
    return sum;
}

informar(lista_sueldos,empleado);