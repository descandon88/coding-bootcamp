//Rango de Numeros
// Confeccionar una funcion que solicite la carga de dos enteros
// (primero el menor y luego el mayor) y nos muestre desde el menor
// hasta el mayor de un en uno
// Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla: 4 5 6 7 8 9 10

const num2enteros =() => {
    let n = [];
    for (let index = 0; index < 2; index++) {
        n[index] = parseInt(Math.random()*20+1);
    }
    console.log(n);
    return n;
}

const rangoDeNumero = (n) => {
        
   let count=[];
   let minElement = Math.min.apply(Math,n);
   let maxElement = Math.max.apply(Math,n);

   for (let index = 0; index < n.length; index++) {
   
    if (n[index]===minElement){
        count.push(minElement);
        //console.log("Hola",count);

       for(let i=0; count[i] < maxElement; i++) {
            count[i+1]=count[i]+1;
            //console.log(count);
           // console.log("Hola 2",count);

        };
        console.log("valor escogido: ",n[index]);
        console.log(count);

        //return count;
        

        
    }
    else if (n[index+1]===minElement) {
        count.push(minElement);
        for(let j=0; count[j] < maxElement; j++) {
            count[j+1]=count[j]+1;
            //console.log(count);
           // console.log("Hola 2",count);

        };
        console.log("valor escogido: ",n[index+1]);
        console.log(count);
        //return count;

    }
        else if (n[index]===n[index+1]) {
        console.log("Numeros repetidos, vuelva a intentar");
            break;

        };
    };
};

const rangos = rangoDeNumero(num2enteros());
console.log(rangos);