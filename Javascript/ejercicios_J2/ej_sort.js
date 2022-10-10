// Ejercicios con el .sort()
// SYNTAX 
// Functionless
sort()

// Arrow function
sort((a, b) => { /* … */ } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(a, b) { /* … */ })


const array1 = ['Hola', 'Chau', 'YoUltimo', 'aPrimero?', 'Andres', 'andres'];
// const array2 = [20, 1, 55, 2000];
// const array3 = ['8', '99', '765'];
// const array4 = ['8', '99', '755', 20, 1, 55, 2000];
console.log(array1.sort());

const array5 = [
{ name: 'Arian', value: 21 },
{ name: 'Nico', value: -10 },
{ name: 'Viking', value: 45 },
{ name: 'German', value: 15 },
{ name: 'Yazimel', value: 18 },
{ name: 'Camila', value: 37 }
];


array5.sort((a,b)=> {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        console.log(nameA + " "+ nameB);
        return -1;
    }
    if (a.value < b.value) {
        console.log(a.value);
        console.log(b.value);

     
    }
});