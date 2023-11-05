/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
/*console.log("" + pets);

//oppure se voglio un elenco con i dati distintamente

for(i = 0; i < pets.length; i++)
console.log(pets[i]);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
/*pets.sort();
console.log(pets);

//Qui ho stampato un array, il quale aprendolo mi mostrerà i suoi elementi in ordine alfabetico

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
/*let petsInvertito = pets.slice().reverse();
console.log(petsInvertito);*/

//Qui ho stampato un array con gli elementi in ordine invertito, mantendendo anche l'ordine alfabetico


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let petsMove = pets.shift();
pets.push(petsMove);
console.log(pets);

//Qui ho stampato l'array creando una variabile nella quale ho tolto il primo elemento con shift, e poi riaggiunto alla fine con push


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach(function(oggetto) {
  oggetto.licensePlate = ("GG104EZ")
});
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push( {
  brand: 'Lamborghini',
  model: 'Murcielago',
  color: 'green',
  trims: ['life', 'style', 'r-line'],
  licensePlate: 'LA999MB',
});
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
cars.forEach(function(auto) {
    if (auto.trims.length > 0) {
        justTrims.push(auto.trims[0]);
    }
});
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let e = 0; e < cars.length; e++){
  var y = cars[e].color.substring(0,1);
  y === "b" ? console.log("Fizz") : console.log("Buzz");
}
 //utilizziamo un for per definire che la variabile e controlli dentro l'array; successivamente diciamo che se una nuova variabile y 
 //che è uguale alla variabile che controlla dentro l'array trovi i color, e successivamente gli indico quali caratteri della stringa voglio selezionare
 //


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;

while (i < numericArray.length && numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let array = [];
for(let c = 0; c < charactersArray.length; c++) {
  let y = charactersArray[c];
  switch(true) {
    case y === "a":
      array.push(1);
      break;
    case y === "b":
      array.push(2);
      break;
    case y === "c":
      array.push(3);
      break;
    case y === "d":
      array.push(4);
      break;
    case y === "e":
      array.push(5);
      break;
    case y === "f":
      array.push(6);
      break;
    case y === "g":
      array.push(7);
      break;
    case y === "h":
      array.push(8);
      break;
    case y === "i":
      array.push(9);
      break;
    case y === "j":
      array.push(10);
      break;
    case y === "k":
      array.push(11);
      break;
    case y === "l":
      array.push(12);
      break;
    case y === "m":
      array.push(13);
      break;
    case y === "n":
      array.push(14);
      break;
    case y === "o":
      array.push(15);
      break;
    case y === "p":
      array.push(16);
      break;
    case y === "q":
      array.push(17);
      break;
    case y === "r":
      array.push(18);
      break;
    case y === "s":
      array.push(19);
      break;
    case y === "t":
      array.push(20);
      break;
    case y === "u":
      array.push(21);
      break;
    case y === "v":
      array.push(22);
      break;
    case y === "w":
      array.push(23);
      break;
    case y === "x":
      array.push(24);
      break;
    case y === "z":
      array.push(25);
      break;
  }
  
}
console.log(array);
