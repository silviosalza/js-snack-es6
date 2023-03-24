// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        type: "Bianchi",
        weight: 25
    },
    {
        type: "Atala",
        weight: 29
    },
    {
        type: "Sprinter",
        weight: 22 
    },
    {
        type: "Gavel",
        weight: 19 
    },
    {
        type: "Dechatlon",
        weight: 33
    }
]

let weightArray = []
bikes.forEach(element => {
    const {type, weight} = bikes
    weightArray.push(element.weight)
});
console.log(weightArray);

let small = weightArray[0]
weightArray.forEach(element =>{
    if (element < small){
        small = element
    }
})
console.log(small);


let lighterBike = ""
bikes.forEach(element => {
    
    if (element.weight === small){
        lighterBike = element;
    }
});

const container = document.querySelector(".container")
console.log(container);
container.innerHTML= `La bicicletta più performante è la ${lighterBike.type}, dal peso di ${lighterBike.weight} Kg.`




