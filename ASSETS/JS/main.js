// Chiedere all'utente il numero di chilometri che vuole percorrere 
var kilometers = parseInt(prompt('Inserire il numero di chilometri da percorrere'));
console.log(kilometers);

if (isNaN(kilometers)) {
    alert('Il valore inserito non è valido! Inserire un numero.')
}

// Chiedere l'età del passeggero.
var userAge = parseInt(prompt("Inserire l'età"));
console.log(userAge);

if (isNaN(userAge)) {
    alert('Il valore inserito non è valido! Inserire un numero.')
}

// Clcolare il prezzo totale del viaggio
