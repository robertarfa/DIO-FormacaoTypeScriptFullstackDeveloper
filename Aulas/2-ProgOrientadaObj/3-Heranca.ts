//Herança tem uma classe que pode passar para a outra tanto os atributos quanto os métodos
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
class Admin extends Account {
  balance: number;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);//como se estivesse chamando o new Account
    this.balance = 20;
  }

  getBalance = () => {
    console.log(this.balance);
  };
}

//Admin será filha de Account

const adminAccount: Admin = new Admin('Roberta', 1);

console.log(adminAccount);

//#################

//Classes abstratas vão servir de modelo para outras classes e não podem ser utilizadas para instanciar objetos
// É utilizada para definir valores que serão utilizadas por outras classes
abstract class Account {
  name: string;
  accountNumber: number;
  balance: number = 0;

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

  getBalance = () => {
    console.log(this.balance);
  };
}

class PeopleAccount extends Account {
  doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {

    super(name, accountNumber);
    this.doc_id = doc_id;

  }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Roberta', 1);

console.log(peopleAccount);