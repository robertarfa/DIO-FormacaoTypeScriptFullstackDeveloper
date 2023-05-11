import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Roberta', 1);

// console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('Roberta', 10);

peopleAccount.deposit();

console.log(companyAccount.deposit());
