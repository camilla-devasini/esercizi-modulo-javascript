// Definire la classe `BankAccountVip` che estendendo dalla classe `BankAccount`,
// oltre a consentire tutte le operazioni di quest'ultima, permette all'utente di ottenere
// un interesse del 3% sull'importo depositato, ma solo se quest'ultimo è maggiore o uguale a 1000€.
// Il risultato finale deve essere 5541.

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  } 

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
    
  }
}

class BankAccountVip extends BankAccount {
    constructor(initialAmount){
      super(initialAmount);
    }
    deposit(amount) {
         if (amount >= 1000) {
          super.deposit(amount * 1.03);
         }
         else super.deposit(amount);
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();

