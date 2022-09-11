// # Async Management - Exercise 4
// Implementare le funzioni `fetchPersonById` e `fetchJobById`,
// le quali dato un id devono restituire rispettivamente:
// * La persona che ha come identificativo l'id passato come parametro
// * Il tipo di lavoro che ha come identificativo l'id passato come parametro

// Infine implementare il codice necessario che si occupa di stampare in console
// la persona e il tipo di lavoro trovato.
// N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe
// le `Promise` sono state risolte.

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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    
      const person = persons.find(item => item.id === id);
      if (person) {
        return resolve((person));
      }
      return reject(`Person with id: ${id} doesn't exist`);
  });
}


function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    
      const job = jobs.find(item => item.id === id);
      if (job) {
      return resolve(console.log(job.jobTitle));
      }
      return reject(`JobTitle with id: ${id} doesn't exist`);
  });
}

fetchPersonById(1)
.then((result) => {
  console.log(result);
  return fetchJobById(1);
})
.catch((error) => console.log(error));


//Potrei usare anchel'API promise.all()

// const allPromises = Promise.all([fetchPersonById(1), fetchJobById(1)]);
// allPromises.then((results) => {
//   console.log(results);
// })