// # Async Management - Exercise 6
// In questo esercizio occorre richiamare la funzione `fetchPersonById` passando
// come id il valore `2` e stampare il risultato restituito in console.
// Per ottenere il valore restituito dalla `Promise` utilizzare le keywords `async/await`.

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
      const person = persons.find(item => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

// fetchPersonById(2)
//   .then((personJson) => JSON.parse(personJson))
//   .then((person) => console.log(person))
//   .catch((err) => console.error(err));

async function fetchAsync() {
  try {
    let result = await fetchPersonById(2);
    console.log(JSON.parse(result));
  } catch(error) {
    console.log(error);
  }
}

fetchAsync();