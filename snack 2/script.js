// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let teams = [
    {
        nome: "Dinamo Sassari",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Fortitudo Bologna",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Virtus Bologna",
        punti: 0,
        falli: 0, 
    },
    {
        nome: "Scavolini Pesaro",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Benetton Treviso",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Armanani Jeans Milano",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Umana Venezia",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Piaggio Torino",
        punti: 0,
        falli: 0, 
    }
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  teams.forEach(element =>{
    element.punti = getRandomInt(10,40)
    element.falli = getRandomInt(100,300)
    return element
  })

  teamFoul =[]
  for(i = 0; i <= teams.length; i++){
      const {nome ,punti, falli} = teams[i]
      teamFoul.push(nome,falli)
      console.log(nome);
      console.log(falli);
  }
  console.log(teamFoul);
  
 