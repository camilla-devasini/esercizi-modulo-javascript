//getters / setters set for properties `firstName` and `lastName`.
const person = {
  name: " ",
  surname: " ",

  get firstName() {
    return `${this.name}`;
  },
  set firstName(newName) {
    this.name = newName;

  },

  get lastName() {
    return `${this.surname}`;
  },
  set lastName(newSurname) {
    this.surname = newSurname;

  },
//method
  fullName() {
    return `${this.name} ${this.surname}`;
  },

}

//cretion of objects using person object as prototype, passing 2 properties 'name' and 'surname'
const john = Object.create(person, {
  'name': {
    value: "John",
    enumerable: true },
  'surname': {
    value: "Doe",
    enumerable: true }
});


const simon = Object.create(person, {
  'name': {
    value: "Simon",
    enumerable: true },
  'surname': {
    value: "Collins",
    enumerable: true }
});


console.log(john.fullName()); 
console.log(simon.fullName()); 

