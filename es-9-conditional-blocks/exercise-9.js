function getKeys(person) {

  let label = [];
  for (const key in person) {
    label.push(`${key}`);   
}
return label;
  }

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);