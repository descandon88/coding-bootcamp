// set array length
var arrayLength = 3;

// create array
var multiArray = new Array(arrayLength);
for (var i = 0; i < multiArray.length; i++) {
  multiArray[i] = new Array(arrayLength);
}

// add items to first array index
multiArray[0][0] = "apple";
multiArray[0][1] = "banana";
multiArray[0][2] = "cherry";

// second
multiArray[1][0] = 2;
multiArray[1][1] = 56;
multiArray[1][2] = 83;

// third
multiArray[2][0] = ['test','again'];
multiArray[2][1] = ['Java','script'];
multiArray[2][2] = ['read','books'];

console.log(multiArray); // printed out in first index order
console.log(multiArray[2]); // prints out subarray
console.log(multiArray[1][1]); // prints out subarray


// for (let index = 0; index < multiArray.length; index++) {
//     console.log(multiArray[index]);
    
// }

 // prints out subarray
//console.log(multiArray[2][2][0]); // individual item
