// 2. Suma de arreglos
//• Realizar un programa que pida la carga de dos vectores numéricos. Obtener la suma de los
//dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar
//componente a componente.
//El tamaño del vector es a elección.

// Generación de los vectores 

const VectorFuncion = (nlength) => { 
    let vect1= [];
    let vect2= [];
    let vect3= [];
for (let index = 0; index < nlength; index++) {
        vect1[index] =parseInt(Math.random()*100+1);   
        vect2[index] =parseInt(Math.random()*100+1);    
        vect3 [index] = vect1[index] + vect2[index]; 
    }
    console.log("vector1: ", vect1);
    console.log("vector2: ", vect2);
    console.log("vector3: ", vect3);

    return vect1, vect2,vect3; 

}

VectorFuncion(5);
