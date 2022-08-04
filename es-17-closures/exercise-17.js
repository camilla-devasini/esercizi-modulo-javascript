
function calculate(initial = 0) {
  let result = initial;
  let operations = {

    add(input) {
      result += input;
      return this;
    },

    sub(input) {
      result -= input;
      return this;
    },
    
    multiply(input) {
      result *= input;
      return this;
    },

    divide(input) {
      result /= input;
      return this;
    },

    printResult() {
      return result;
    },
  
  
  }

return operations;

}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
console.log(calculator.printResult());

