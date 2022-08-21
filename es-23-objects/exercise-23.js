const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

//Coppie chiave-valore utilizzando Object.keys:

let list = Object.keys(person);
for (let i in list) {
  console.log(`${list[i]}: ${person[list[i]]}`);
}


//Coppie chiave-valore utilizzando Object.entries:
//  console.log(Object.entries(person));





