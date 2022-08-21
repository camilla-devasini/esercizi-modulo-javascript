// Definire la classe `Person` che accetta tre parametri nel costruttore: `firstName`, `lastName` e `age`
// e definisce per ciascuna di queste tre proprietà i rispettivi metodi getters e setters.
// Definire inoltre anche il metodo getter `fullName`
// che si occupa di restituire le proprietà nome e cognome concatenat

class Person {
  #firstName; // Devo definire questi private fields, se inserisco le proprietà private (#...) solo nel costruttore, pur avendo getters e setters, non posso accedervi fuori dalla classe.
  #lastName;
  #age;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  get firstName() {
     return this.#firstName;
  }
  set firstName(newFirstName) {
     return this.#firstName = newFirstName;
  }
  get lastName() {
     return this.#lastName;
  }
  set lastName(newLastName) {
     return this.#lastName = newLastName;
  }
  get age() {
    return this.#age;
 }
 set age(newAge) {
    return this.#age = newAge;
 }
  get fullName() {
     return `${this.#firstName} ${this.#lastName}`;

  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);

