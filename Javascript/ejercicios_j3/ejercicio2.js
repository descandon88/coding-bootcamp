// Programa: ¿Cual es el menor? 
// Elaborar una funcón a la cual le enviemos tres enteroes y muestre el menor

const menorDeLosEnteros = (num) => {
    let numeroEntero = [];
        for (let index = 0; index < num; index++) {
            numeroEntero [index] = parseInt(Math.random()*20+1);
        };
    console.log(numeroEntero);
    let result = Math.min.apply(Math,numeroEntero);
    return result
}


const elMenor = menorDeLosEnteros(4);

console.log(elMenor);