// # Error handling - Exercise 3
// Sostituire il lancio delle eccezioni con due classi custom che estendono dalla classe `Error`:

// * `NegativeAmountError`: classe custom qualora viene fornito un importo negativo
// * `WithdrawNotPermittedError`: classe custom qualora si cerca
// di ritirare dal proprio conto corrente un importo maggiore rispetto al totale consentito

class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}

class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeAmountError";
  }
}

class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.name = "WithdrawNotPermittedError";
  }
}


class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError("The amount provided cannot be negative"); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError("The amount provided cannot be negative"); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError("You cannot withdraw more than account balance"); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}



try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}


