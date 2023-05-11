import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = () => {
    console.log("Você pegou um empréstimo");
  };

  //sobrescrever o método da classe mãe
  deposit = (): number => {
    return 2;
  };
}