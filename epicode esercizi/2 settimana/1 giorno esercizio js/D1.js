/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*SCRIVI QUI LA TUA RISPOSTA
  In javascript troviamo i dati primitivi e i dati complessi.
  Conosciamo 5 tipi di dati primitivi e sono
  1) Numeri, unica sequenza per i numeri e per  di tipo di numero (intero, decimale, negativo) 
  2) Stringa, è una sequenza di caratteri, delimitata da apici (doppi o singoli)
  3) Booleano, il quale ha solo due valori: True|False
  4) Null, il quale prevede un solo valore possibile: null; e non rientra nei precedenti tipo di dato
  5) Undefined, il quale prevede solo un valore: undefined. Rappresenta un valore che non esiste, e non ha assegnato nessun valore
  Tutti gli altri tipi di dati sono dati oggetto; negli oggetti noi possiamo inserire proprietà (coppie attributo valore) e/o metodi (funzioni)*/  

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/

    /*const name = "dambrosio";
    name = "kebab";
    console.log(name);*/ 
    
    /*D1.js:30 Uncaught TypeError: Assignment to constant variable.
    at D1.js:30:10*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 12;
let b = 20;
console.log((a + b));

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var c = 4;
var x = 12;
console.log(c - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "john";
var name2 = "John";
(name1 == name2) ? console.log("Sono uguali") : console.log("Sono diversi");
(name1 == name2.toLowerCase()) ? console.log("Sono uguali") : console.log("Sono diversi");