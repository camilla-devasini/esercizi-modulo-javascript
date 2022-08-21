// Definire la classe `BankAccount` che, dato in input un importo iniziale,
// consente di eseguire operazioni di deposito, ritiro e visualizzazione sul proprio conto corrente.
// La classe in questione dovrà implementare i seguenti metodi:

// * `deposit`: un metodo pubblico che consente di aggiungere fondi al proprio conto corrente
// * `withdraw`: un metodo pubblico che consente di ritirare fondi dal proprio conto corrente
// * `view`: un metodo pubblico che consente di visualizzare in console il saldo finale del conto corrente

class BankAccount {
    constructor(amount) {
        this.amount = amount;
    
        
    }

    deposit(value) {
        this.amount += value;
        return console.log(`You have deposited in your account €${value}, your current balance is €${this.amount}`)
    }
    withdraw(value) {
        this.amount -= value;
        return console.log(`You have withdrawn from your account €${value}, your current balance is €${this.amount}`)
    }
    view() {
        console.log(`Your bank account balance is €${this.amount}`);
    }


}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();