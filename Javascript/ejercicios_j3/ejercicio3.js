// Ordenando de Mayor a Menor
// Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor

const ordernarLosEnteros = (num) => {
    let numeroEntero = [];
        for (let index = 0; index < num; index++) {
            numeroEntero [index] = parseInt(Math.random()*20+1);
        };
    console.log(numeroEntero);
    function compararNumero(a, b) {
        return a - b;
      };
    let result = numeroEntero.sort(compararNumero);
    return result
}


const enterosOrdenados = ordernarLosEnteros(3);

console.log(enterosOrdenados);
