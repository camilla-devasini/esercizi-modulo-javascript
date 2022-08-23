// # JSON methods - Exercise 4
// In questo esercizio occorre filtrare le proprietà dell'oggetto `person`
// affinché vengono codificate in json solo i valori numerici (vale a dire `id` e `age`).

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// const json = JSON.stringify(person);
//  // Should return: { id: 1, age: 25 }


const json = JSON.stringify(person, replacer);

function replacer(key, value) {
  if (typeof value !== "string") {
    return value; 
  }
  return undefined;

}

console.log(json);

