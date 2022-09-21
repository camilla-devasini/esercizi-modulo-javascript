// # Rest parameters and spread syntax - Exercise 1
// La funzione `sum` presenta un elevato numero di parametri in ingresso,
// come possiamo migliorare il codice affinché eccetti un numero indefinito di valori da sommare?

// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

function sum(...numbers) {
    let total = numbers.reduce((start, current) => start + current, 0);
    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));

