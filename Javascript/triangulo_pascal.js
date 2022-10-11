// Realice un programa que imprima el Triángulo Pascal 


const TrianguloPascal = (nfilas) => { 

    let  multiArray = [];
    let k = 1;
    let filaPar =2; 

    for (let i = 0; i < nfilas; i++) {
        multiArray[i]= new Array(i);
        for (let j = 0; j < multiArray.length; j++) {
            
            multiArray[i][j] = 1;
        };

    }    
        while (filaPar<nfilas) { 
            for (let index = filaPar; index<multiArray.length; index++) {
                multiArray[index][index-k]=multiArray[index-1][index-(k+1)]+ multiArray[index-1][index-k];

                multiArray[index][k]=multiArray[index-1][index-(k+1)]+multiArray[index-1][index-k];

            };
            k++;
            filaPar+=2;
        };
        return multiArray;
};
  
const imprimir = (arreglo) => { 
    for (let l = 0; l < arreglo.length; l++) {
        console.log(arreglo[l]);
        
    }
}; 

let ArreglosTriangulo = TrianguloPascal (11);

imprimir (ArreglosTriangulo);
