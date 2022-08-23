// # JSON methods - Exercise 2
// Implementare il metodo `fromJson` che accetta un json e istanzia un oggetto di tipo `Person`

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(jsonObj) {
    let JsObj = JSON.parse(jsonObj);
    let NewJsObj = new Person(JsObj.id, JsObj.firstName, JsObj.lastName, JsObj.age);
    return NewJsObj;
  }
}


const json = '{"mao":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);