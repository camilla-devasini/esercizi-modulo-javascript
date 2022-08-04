// function memoize(fn) {
//   let cache = {};
//   // ...
// }

// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }

//   return x * factorial(x - 1);
// }

// factorial = memoize(factorial);
// console.log(factorial(10));
// console.log(factorial(6));
// console.log(factorial(5));


// nota: il fattoriale di un numero naturale si indica con n! ed è uguale al prodotto
// di tutti i numeri interi positivi minori o uguali a n. Si calcola moltiplicando n
// per tutti i numeri interi positivi che lo precedono. Se n=0, si pone per convenzione che n! sia = 1.



//funzione check nella cache
function memorize(fn) {
  let cache = {};
  return function (number) {
    if (cache[number]) {
      console.log('Fetching from cache for ' + number);
      return cache[number];
    }

    else {
  
    console.log ('Calculating results for ' + number)
    const output = fn(number);
    cache[number] = output;
    return output;

    }
  }
}

//funzione di calcolo fattoriale
function factorial(x) {
  if (x === 0) {
    return 1;
  }

  else {
    return x * factorial(x - 1);
  }
}

let factory = memorize(factorial);
console.log(factory(10)); // x = 10
console.log(factory(6));
console.log(factory(5));
console.log(factory(10)); // già presente nella cache
console.log(factory(6)); // già presente nella cache
console.log(factory(5)); // già presente nella cache

