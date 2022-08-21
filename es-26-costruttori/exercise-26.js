//function Person with method fullName
function Person(firstName, lastName) {
  this.fullName = function() {
    return `${firstName} ${lastName}`;
  };
  
}
//Creation of objects john and simon using the constructor function
let john = new Person("John", "Doe");
let simon = new Person("Simon", "Collis");


console.log(john.fullName());
console.log(simon.fullName()); 