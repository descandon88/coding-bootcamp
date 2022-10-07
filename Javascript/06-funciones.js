
// Funcion convencional
function myFirstfunction () {
    console.log("Llamé a mi primera funcion");
}

// Funcion arrow
const myFirstArrowFunction = () => {
    console.log("Llmaré a mi primera arrow function");
}

myFirstfunction();

// Tirar el dado
// queremos tirar un numero al azar entre 1 y 6
const throwDice = () => {
    const result = Math.floor(Math.random()*6)+1;
   // console.log("Resultado del dado: ", result);
    return result;
};

// Tiramos 5 dados de generala 

const throwPokerDice =(numerofDice) => {
    for (let index = 0; index < numberofDice; index++) {
        throwDice();
        
    }
};

const throwDiceSum = (numberofdice) => {
    let sum=0;
    for (let index = 0; index < numberofdice; index++) {
        const result = throwDice();
        console.log("result", result);
        sum+= result;
    }
    console.log(sum);
};

throwDiceSum(2);


// recorro array con for
const logItem = (array, index) => {
    const element = array[index];
    console.log(element);
}

mixedArray = [2,3,4,5,6,10,12]; 


for (let i=0; i < mixedArray.length; i++){
    logItem (mixedArray,i);
}

// recorro forEach

mixedArray.forEach((value)=> {
    console.log(value);
});


let numberlist = [23,3,4,6,4,6,10,12,21,33,32]; 

numberlist.forEach((number)=>{
    if (number%2 === 0) {
        numberlist.push(number);
    }
    return numberlist;
});

// Filter

const contriesWithU= countries.filter ((country)=>{
    return country.toLocaleLowerCase().charAt(0)==="u";
})