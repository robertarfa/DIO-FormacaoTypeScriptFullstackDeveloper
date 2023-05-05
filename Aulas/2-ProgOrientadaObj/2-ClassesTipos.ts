// Dio Banking

//Abstração
//name, accountNumber
//depositar,sacar

class Account {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("Você depositou");
  };

  withdraw = () => {
    console.log("Você sacou");
  };
}

const newAccount: Account = new Account("Roberta", 1);

const newAccount2: Account = new Account("Renata", 2);
newAccount2.deposit();

console.log(newAccount);
console.log(newAccount2);

//Herança tem uma classa que pode passar para a outra tanto os atributos quanto os métodos

