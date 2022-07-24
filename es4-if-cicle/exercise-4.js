// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

function calculateSalary(role) {
  if(role === 'ceo') {
    return "2200";
  }
  else if (role === 'manager') {
    return "1800";
  }
  else if (role === 'cto') {
    return "1800";
  }
  else if (role === 'developer') {
    return "1500";
  }
  else {
    return "1000";
  }
}


const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);


/* OPPURE

function calculateSalary(role) {
  let result = (role === 'ceo') ? 2200 : 
               (role === 'manager') ? 1800 :
               (role === 'cto') ? 1800 :
               (role === 'developer') ? 1500 :
               1000;

  console.log(result);
}
calculateSalary('ceo');
calculateSalary('manager');
calculateSalary('cto');
calculateSalary('developer');
calculateSalary('other');
*/

