// Perímetro de un cuadrado
// Elaborar una función a la cual le envíe el valor del lado de un cadrado y me retorne su perímetro

const perimetroCuadrado = (lado) => {
    let perimetro = 0; 
    for (let index = 0; index < 4; index++) {
        perimetro+= lado;
        
    }
    return perimetro
}

const perimetroFigura = perimetroCuadrado(35);
console.log(perimetroFigura)
