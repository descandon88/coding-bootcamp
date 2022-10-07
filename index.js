const precios = [10,1400,23.4,320,23,43,55,12,65];
// console.log(precios.length);

for (let i =0; i < precios.length; i++) {
  
        if (i >=precios.length/2){
            console.log ("el for llegó a la mitad", +i);
        }
        else {
            console.log("posicion actual: ", +i);
            console.log ("valor actual: "+precios[i]);
        }
    
}

// Ejercicio 2
// .toFixed;
const precios_2 = [10,1400,23.4,320,23,43,55,12,65];

let i = 0;
while ( i<precios_2.length) {
    console.log("posicion actual: ", +i);
    console.log ("valor actual: "+precios_2[i]);
    console.log ("nuevo valor : "+ (precios_2[i] * 1.07).toFixed(2));
    console.log("");
    i++;
}

// Ejercicio 3
const precios_3 = [10,1400,23.4,320,23,43,55,12,65];
for (let index =0;index < precios_3.length; index++){
    let suma=0;
    let cantidad=0;
    while (suma<=1500){
        suma +=precios_3[index];
        cantidad++;
    }
    console.log ("gasto $ " + suma + " comprando " + cantidad + " articulos de " + index);
}

// Ejercicio 4
const precios_4 = [10,1400,23.4,320,23,43,55,12,65];

const nuevosPrecios = [];
// const nuevoPrecio=[];
for (let i=0; i <precios_4.length; i++) {
    const nuevoPrecio=( precios_4 [i] * 1.07);
    nuevosPrecios.push(nuevoPrecio.toFixed(2));
}

// console.log(nuevoPrecio);
console.log(nuevosPrecios);

// Ejercicio
// Objetos
let auto = {
    marca: "Volkswagen",
    modelo: "Beatle",
    año: 1962
}
console.log(auto.marca);
auto.marca = "Ford";
console.log(auto.marca);

let a = 20 % 3;
// Ejercicio 