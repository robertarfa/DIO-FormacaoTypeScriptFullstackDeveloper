const num: number = 15

if(num > 15){
  console.log('Num maior que 15')
}else if(num === 15){
 console.log('Num igual a 15')
}else{
  console.log('Num menor que 15')
}

//Objetos literais

const userTypes = {
  admin: 'Seja bem vindo admin!',
  student: 'Você é um estudante!',
  viewer: 'Você pode visualizar!'
}

function validateUser(user: string){
console.log(userTypes[user as keyof typeof userTypes])
}

const user = 'admin'

validateUser(user)
validateUser('student')
validateUser('viewer')