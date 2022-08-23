// # Destructuring assignment - Exercise 4
// Utilizzare la destrutturazione per stampare la lista dei valori delle proprietà
// presenti in `person`:

// ```
// id: 1
// firstName: Mario
// lastName: Rossi
// age: 25
// ```

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


//   for (let item of Object.entries(person)) {
//     console.log(`${item[0]}: ${item[1]}`);
//   }



Object.entries(person).forEach( ([propertyName, value]) => console.log(`${propertyName}: ${value}`));



 









