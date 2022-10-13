// EJERCICIO # 4
// Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la
// altura promedio de las personas.
let alt = [];
let sum=0;
let count= 0;
let promedio=0;
for (let index = 1; index <= 5; index++) {
    alt[index] = parseInt(prompt("Ingrese la altura de la persona"+ "index: " ));
    sum+=alt[index];
    count++;

  
}

if (count==5){
    promedio=sum/5;
    console.log(promedio);

 }



