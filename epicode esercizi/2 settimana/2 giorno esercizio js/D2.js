/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 10;
let num2 = 25;
if (num1 > num2){
  console.log("num1 è il più grande tra i due");
} else {
  console.log("num2 è più grande");
}
//lasciando soltanto if, in consolelog non apparirà nulla, else dice che esseno che la prima condizione non è vera, deve usare il contenuto di else.

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = 5;
let num4 = 6;
if (num4 === num3){
  console.log("==");
}  
  else {
    console.log("!==")
}


/* SCRIVI QUI LA TUA RISPOSTA */

//Essendo che num4 e num3 non sono strettamente uguali, o semplicemente uguali, quindi stamperò il simbolo !==.

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num5 = 25;
let num6 = 5;
if (num5 % num6 === 0) {
  console.log("divisibile per 5")
}

/* SCRIVI QUI LA TUA RISPOSTA */

// Essendo che il resto di 25 / 5 è zero, sappiamo che il primo numero è divisibile perfetamente per 5 e quindi printeremo la stringa che scegliamo di far apparire


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num7 = 5;
let num8 = 3;
if(num7 === 8) {
  console.log("il valore di num7 è 8");
}
if(num8 === 8){
  console.log("il valore di num8 è 8");
}
if(num7 + num8 === 8) {
  console.log("la loro addizione è uguale a 8");
}
if(num7 - num8 === 8) {
  console.log("la loro sottrazione è uguale a 8");
}

/* SCRIVI QUI LA TUA RISPOSTA */

//Ponendo tutte le casistiche e cosa dovesse scrivere nella console, l'unico messaggio ad apparire è che la loro addizione fa 8.

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.

  dichiaro 3 variabili: totale costo pagamento=totale -> if un valore è sopra una certa soglia, faccio  
*/

let costoProdotto1 = 20;
let costoProdotto2 = 10;
let costoProdotto3 = 5;
const totalShoppingCart = (costoProdotto1 + costoProdotto2 + costoProdotto3);
let shipping = 10;
if(totalShoppingCart > 50) {
  console.log("Free Shipping", "€", totalShoppingCart);
}else {
  console.log(totalShoppingCart + shipping);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
  
  fare lo sconto (* 0.8)
*/

let costoProdotto4 = 20 * 0.8;
let costoProdotto5 = 10 * 0.8;
let costoProdotto6 = 5 * 0.8;
const totalShoppingCart2 = (costoProdotto4 + costoProdotto5 + costoProdotto6);
if(totalShoppingCart2 > 50) {
  console.log("Free Shipping", "€", totalShoppingCart);
}else {
  console.log(totalShoppingCart2 + shipping);
}
/* SCRIVI QUI LA TUA RISPOSTA */

//Applicando lo sconto direttamente ai prezzi dei prodotti risulta che il totale sia inferiore a 50€ e quindi aggiunge il costo di spedizione

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.


  annido una serie di if -> controllo le condizioni e stampo la condizione quando è true
*/

let num10 = 7;
let num11 = 14;
let num12 = 21;
let array3 = []
if(num12 > num11, num10) {
  array3.unshift(num12);
}else{
  array3.push(num12);
}
if(num11 > num12, num10) {
  array3.unshift(num11);
}else {
  array3.push(num11);
}
if(num10 > num12, num11) {
  array3.unshift(num10);
}else {
  array3.push(num10);
}
console.log(array3);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore = null;
if(valore === typeof Number){
  console.log("Questo è un numero");
}else {
  console.log("Questo non è un numero");
}

/* SCRIVI QUI LA TUA RISPOSTA */

//Dando un valore non numerico alla variabile, quando chiederemo se la variabile è di tipo numero, lei stamperà che non lo è 

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num14 = 17;
if(num14 % 2 === 0){
  console.log("Questo è un numero pari");
}else {
  console.log("Questo è un numero dispari");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/


  let val = 7;
  val = 3;
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* SCRIVI QUI LA TUA RISPOSTA */

//cambiando il valore della variabile , cambiando l'ordine delle condizioni in if else if else, modifichiamo il messaggio che uscirà scritto che sarà comunque corretto

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
  ricordati che sei dentro a un oggetto -> aggiungo qualcosa (una proprietà) all'oggetto
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
}
me.city = "Toronto";
delete me.lastName;
me.skills.pop();
console.log(me);


/* SCRIVI QUI LA TUA RISPOSTA */

//Inserendo un oggetto incrementandolo, quindi chiamando la variabile e inserendo dopo il " . " una coppia attributo valore, apparirà quanto stampo in console


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

//Inserendo delete come comando per cancellare un'oggetto, ed indicando da quale variabile toglierlo ed il nome del contenuto da togliere, lastName non apparirà più stampato

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const array = [];
array.push(1, 2, 3 ,4 , 5, 6, 7, 8,9, 10);
console.log(array);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

const array1 = [1, 2, 3 ,4 , 5, 6, 7, 8,9, 10];
array1[9] = 100;
console.log(array1);

/* SCRIVI QUI LA TUA RISPOSTA */
