// ESERCIZIO SVOLTO IN PAIR PROGRAMMING
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',

  fullName() {
    return `${this.firstName} ${this.lastName}`; 
  },
 
  Info() {

    for (let prop in person){
      if ((typeof person[prop] == 'string') || (typeof person[prop] == 'number')){
        console.log(this[prop]);
      }
    }
    
  }
}

console.log(person.fullName());
person.Info();


// IL METODO Info() SI POTREBBE SCRIVERE ANCHE COSI':

    // Info() {

    // let select = (Object.values(person)).splice(0,4);
    // return select.join(" ");

    //  }

// OPPURE COSI':

  // Info() {

  //   return `${this.fullName()}, ${this.age}, ${this.job}`;
  // } 






