
// # Async Management - Exercise 2
// Migliorare la funzione `fetchPersonById`, in modo tale 
// che la `Promise` venga rigettata qualora non esiste una persona con l'id passato come parametro.

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
    setTimeout(() => {
      if(persons.find(item => item.id === id)) {
        resolve(persons.find(item => item.id === id))
      } else {
        reject(new Error("Person not found"))
      }}, 1000);
  });
}

fetchPersonById(9)
.then((person) => console.log(person))
.catch((err) => console.log(err.message));
