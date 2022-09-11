// # Async Management - Exercise 1
// Implementare la funzione `fetchPersonById`, la quale riceve in input un id e
// restituisce una `Promise` contenente l'oggetto della persona corrispondente a quell'id.

const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];


function fetchPersonById(id) {
  return new Promise((resolve, reject) => { 
    if (persons.find((obj) => obj.id === id)) {
    resolve(console.log((persons.find((obj) => obj.id === id))))
    } else {
      reject(new Error("Person not found"));
    }
  });
}

let promise = fetchPersonById(1);  // la promise assume status resolved
promise
.then(() => {
  console.log();
})
.catch((err) => {
  console.log(err.message);
});

promise = fetchPersonById(7); // la promise assume status rejected
promise
.then(() => {
  console.log();
})
.catch((err) => {
  console.log(err.message);
});





