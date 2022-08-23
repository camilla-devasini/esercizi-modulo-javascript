// # Error handling - Exercise 1
// Implementare all'interno della classe `BankAccount` un controllo sui metodi `deposit` e `withdraw`.
// Entrambi i metodi devono poter lanciare un errore qualora venisse passato un `amount` negativo.
// Il metodo `withdraw` deve poter lanciare un errore
// anche qualora venisse passato un `amount` superiore rispetto al totale presente sul conto corrente.



class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  
  deposit(amount) {
    // throw an exception if amount is negative
  
    if (amount >= 0) {
      console.log(`You have correctly deposited. Your current balance is €${this.#amount += amount}`);
    } else {
      try {
      throw new Error("The deposit amount chosen corresponds to a negative value or is equal to 0");
      } 
    
      catch(err) {
        console.log(err.message);
      }
    }
  }
  
  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    if (amount < 0 || amount > this.#amount) {
      
      try {
        throw new Error("The amount chosen is a negative value or is higher than the current balance"); 
      }
      catch(err) {
        console.log(err.message);
      } 
    }
    else {
      this.#amount -= amount;
    }
  }

  view() {
    console.log(`Your current balance is €${this.#amount}`);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(-400); //Not possible
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();