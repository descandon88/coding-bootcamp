//12. Los cuatro triángulos
//• Realizar un programa que lea los lados de 4 triángulos, e informar:
//a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos
//lados iguales), o escaleno (ningún lado igual)
//b) Cantidad de triángulos de cada tipo.
//c) Tipo de triángulo del que hay menor cantidad.
 
let t1=[3,4,4];
let t2=[4,5,6];
let t3=[4,4,4];
let t4=[2,4,6];

const triangulos = [
 {
        "id":01,
        "lados":[3,4,5],

    },
    {         
        "id":02,
        "lados":[4,4,4],
    },
    {    
        "id":03,
        "lados":[5,4,5],
     },     
     {         
        "id":04,
        "lados":[5,5,5],
     },
 ];

 let equiTriangle=0;
 let isoTriangle=0;
 let escaTriangle=0;


for (let index = 0; index < triangulos.length; index++) {
    let triangulo = triangulos[index];
    if (triangulo.lados[0]=== triangulo.lados[1]&&triangulo.lados[0]=== triangulo.lados[2]) {
        console.log ("Es triángulo equilatero")
        equiTriangle++;
    }
    else if (triangulo.lados[0]=== triangulo.lados[1]||triangulo.lados[0]=== triangulo.lados[2]||
        triangulo.lados[1]=== triangulo.lados[2]){
        console.log("Es Triángulo Isósceles");
        isoTriangle++;
    }
    else {
        console.log ("Es triángulo Escaleno");

    }
    
}





// let triangle = [];
// for (let index = 0; index < triangulos.length; index++) {
//     triangle.push(Object.entries(triangulos[index].lados));
   
    
// }

// console.log(triangle)

// function comparate(item, index) {
//     if (item[index]===item[index+1]){
//         console.log ("imprimir aqui");
//     }
//     console.log (item[0][2],index);
// }

// triangle.forEach(comparate);


// //console.log(triangle[1]);

 