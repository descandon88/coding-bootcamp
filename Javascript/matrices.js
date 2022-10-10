var matrixRow = new Array();
for (let x = 0; x < 10; x++) {
    matrixRow[x]= new Array();
    for (let y = 0; y < 10; y++) {
        matrixRow[x][y]= x+y;
        
    }
}

for (let elemento in matrixRow) { 
    console.log(elemento + "=" + matrixRow[elemento]);
}
