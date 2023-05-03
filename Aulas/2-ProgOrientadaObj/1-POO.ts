// const userData = {
//   name: 'Roberta',
//   age: 36,
//   showName() {
//     console.log(this.name);
//   }
// };

// //Pode acessar o objeto e os atributos do obj

// userData.showName(); //é um método

class User {
  name: string = 'Robs';
  age: number = 36;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName = () => {
    console.log(this.name);
  };
}

const userData = new User('Renata', 42);

userData.showName();

//this dentro de uma classe, método ou construturor quer dizer que é para acessar a propriedade dentro daquele objeto.