// # Async Management - Exercise 5
// Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono
// restituire rispettivamente:
// * La persona che ha come identificativo l'id passato come parametro
// * Il tipo di lavoro che ha come identificativo l'id passato come parametro

// La prima funzione (`fetchPersonById`) deve restituire una `Promise` con un delay di 1000 millesecondi
// (`setTimeout`)
// La prima funzione (`fetchJobById`) deve restituire una `Promise` con un delay di 500 millesecondi
// (`setTimeout`)

// Infine implementare il codice necessario che si occupa di stampare in console
// il risultato della **prima** `Promise` che viene risolta.
// N.B: esiste un metodo che, dato in input un array di `Promise`,
// attende fino a quando una delle `Promise` non viene risolta o rigettata.

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
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      if (person) {
        return resolve(person);
      }
      return reject(`Person with id: ${id} doesn't exist`);
    },1000);
  });
}


function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);
      if (job) {
      return resolve(job.jobTitle);
      }
      return reject(`JobTitle with id: ${id} doesn't exist`);
      },500);
  }); 
}


const firstSolved = Promise.race([fetchPersonById(1), fetchJobById(1)]);
firstSolved.then(values => {
 console.log(values);
})