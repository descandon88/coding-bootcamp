// name: "German"
// lastName:"Garcia"
// age: 26 
//isTeacher: true

// En lugar de estar definiendo variables y propiedades de manera separada
// const name="german";
// const lastName="garcia";
// const name2="Felipe";
// const lastname2="Ruete";

// Se definen con corchetas
const german = {
    name:"German",
    lastName: "Garcia",
    age: 26,
    isTeacher: true,
    mascotas: [{name:"Kira", specie: "perro"} ],
    deportes: ["Futbol","Tenis"],
    fechaDeNaciomiento:"19/11/1995",
};

console.log(german.deportes);

// Ejemplo#2

const LikeFutbol = personasFsdb8.filter((persona) => {
    const personCopy= { ...persona }; // persona es un parámetro
    const LowerCaseFavoriteSports = personCopy.favoriteSports.map((sport) => {
        return sport.toLocalLowerCase();
    });
    return LowerCaseFavoriteSports.includes("futbol");
});

// map( ) para mapear