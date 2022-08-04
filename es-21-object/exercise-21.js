const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// console.log(person1.address === person2.address) returns true,
// but the structure inside of the object address is not replicated.
// I apply a deep copy method: 

const person2 = JSON.parse(JSON.stringify(person1));
person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);

// oppure SPREAD OPERATOR:
// const person2 = {
//   ...person1,
//   address: {
//     ...person1.address,
//     region: 'Lombardia',
//     city: 'Milan',
//   }
//   }
// person2.address.region = 'Lombardia';
// person2.address.city = 'Milan';

// console.log(person1);
// console.log(person2);
