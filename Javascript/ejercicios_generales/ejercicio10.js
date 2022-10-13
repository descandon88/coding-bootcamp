// Ejercicio # 10. Los últimos serán los primeros
// Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los
// últimos 5 valores ingresados.
const ultimosPrimeros = () => { 
    let num = [];
    let n=10; // cantidad de numeros --> nuestro caso es 10
    let sum=0;
    i=5;
    for (let index = 0; index < n; index++) {
        num [index] = parseInt(Math.random()*20+1);
        if (index === (n-i)) {
           
            sum+=num[index];
            i--;
        };
    }
    console.log(num); 
    console.log(sum);
};

ultimosPrimeros();

