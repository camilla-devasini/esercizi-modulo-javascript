const person = {
  firstName: 'John',
  lastName: 'Doe'
};

//in the terminal i receive undefined instead of error if i use Optional Chaining:
console.log(person?.address?.city);
console.log(person?.fullName);


