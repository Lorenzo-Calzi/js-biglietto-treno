// Chiedere all'utente il numero di chilometri che vuole percorrere 
var kilometers = parseInt(prompt('Inserire il numero di chilometri da percorrere'));
console.log(kilometers);
document.getElementById('distance').innerHTML = 'Numero di chilometri da percorrere: ' + kilometers;

if (isNaN(kilometers)) {
    alert('Il valore inserito non è valido! Inserire un numero.')
}


// Chiedere l'età del passeggero.
var userAge = parseInt(prompt("Inserire l'età"));
console.log(userAge);
document.getElementById('age').innerHTML = 'Età del passeggero: ' + userAge;

if (isNaN(userAge)) {
    alert('Il valore inserito non è valido! Inserire un numero.')
}


// Clcolare il prezzo totale del viaggio
var priceForKm = 0.21;
var ticketPrice = kilometers * priceForKm;
console.log(ticketPrice);
document.getElementById('price').innerHTML = 'Costo del biglietto: ' + ticketPrice;

if (userAge < 18 ) {
    var sconto = (ticketPrice*20)/100;
    console.log(sconto);
    var teenPrice = ticketPrice - sconto;
    console.log(teenPrice);

} else if (userAge >= 65) {
    var sconto = (ticketPrice*20)/100;
    console.log(sconto);
    var overPrice = ticketPrice - sconto;
    console.log(overPrice);
}

