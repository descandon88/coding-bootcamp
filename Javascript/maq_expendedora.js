// Ejercicio 18 - Máquina expendedora
// • PRECONDICIÓN:
//○ La máquina cuenta con 30 monedas de 10 y 50 monedas de 5.
//○ El precio de todos los productos es múltiplo de 5
//○ La máquina soporta solo billetes uruguayos (50, 100, 200, 500, 1.000,
//2.000)

//• Se ingresa el valor del producto (múltiplo de 5).
//• Se ingresa el dinero entregado en la máquina.
//• Se debe imprimir cuantas monedas de 10 y cuántas de 5 hay que entregar.
//• En caso que el cambio no alcance se imprime “no hay cambio suficiente”

// let valor = parseInt(prompt("ingrese el valor del producto: "));
// let dinero = parseInt(
//   prompt("ingrese el dinero entregado a la maquina: "));

//30 monedas de 10
//50 monedas de 5
const maquinaExpendedora = (mm10,mm5,valor,dinero) => {
    if (valor % 5 === 0) {
        console.log("El valor del producto es: " + valor);
        console.log("El dinero ingresado a la máquina es: " + dinero);
        if (valor < dinero) {
          let cambio = dinero - valor;
          console.log("Su cambio es: " + cambio);
          let moneda10 = parseInt(cambio / 10);
          mm10 -= moneda10;
          let acumulado = moneda10*10;
          // let moneda5 = (cambio - moneda10 * 10) / 5;
          // monedas5_maquina -= moneda5;
          let moneda5 = 0; // creo una variable local para incrementar las monedas de 5 

          if (mm10 < 1) {
            acumulado=30*10;
            while (mm5 > 0 && cambio>acumulado ) {
              moneda5++;
         
              mm5 --;
              acumulado +=5;
         
     
            }
            if(cambio>acumulado)
            {   
                let faltante= cambio-acumulado
                console.log("Total de monedas de 10 de cambio: "+"30");
                console.log("Total de monedas de 5 de cambio: "+"50");
                console.log("disculpe no hay cambio suficiente");
                console.log("Faltan: " + faltante + " pesos por devolver");

            }
            else {
         
            console.log("Total de monedas de 10 de cambio: "+"30");
            console.log("Total monedas de 5 de cambio: "+moneda5);
            console.log("Total de monedas de 10 en la máquina: "+"0");
            console.log("Total de monedas de 5 en la máquina: "+mm5);
            };
          } 
          else {
            while (mm5 >= 1 && cambio>acumulado ) {
            moneda5 = parseInt((cambio - moneda10 * 10) / 5);
            mm5 --;
            acumulado += 5;         
            };
            console.log("Total de monedas de 10 de cambio: "+ moneda10);
            console.log("Total monedas de 5 de cambio: ",moneda5);
            console.log("Total de monedas de 10 en la máquina: "+mm10);
            console.log("Total de monedas de 5 en la máquina: "+mm5);
       
          }
      
        };    

    }
    else {
      console.log("Ingrese un valor múltiple de 5, vuelva a interlo.");
    };  
};

let dinero = 880;
let valor = 550;
let moma10 = 30;
let moma5 = 50;
maquinaExpendedora(moma10,moma5,valor,dinero);
