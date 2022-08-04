const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = "Simon";

console.log(person1);
console.log(person2); 

// Spiega con un commento scritto il perché, modificando l'oggetto `person2`, viene modificato anche l'oggetto `person1`.

// Diversamente dai "prmitive data-type" (boolean, string, number, null, undefined) che possono essere assegnati ad una variabile "per valore", 
// i "non primitive data-type" (array, objects) vengono assegnati alla variabile "per riferimento",
// ovvero la variabile riceve il riferimento che punta all'allocazione di memoria relativa all'oggetto.
// Es. let obj = {}; L'oggetto viene creato nella memoria ed assegnato alla variabile obj.
// Alla variabile obj viene passato l'"indirizzo" di quell'oggetto che si trova nella memoria.

// Nell'esercizio precedente, alla variabile person2 è assegnato l'oggetto person1, quindi person1 e person2
// si riferiscono alla stessa posizione di memoria, pertanto il cambiamento della proprietà name si riflette
// in entrambi.