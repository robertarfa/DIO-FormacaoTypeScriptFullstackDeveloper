interface Pessoa{
  nome: string,
  idade: number,
  profissao?: string // coloca ? para tornar opcional
}

const pessoa: Pessoa = {
  nome: 'Roberta',
  idade: 36
}

const outraPessoa: Pessoa = {
  nome: 'Renata', 
  idade: 42,
  profissao: 'tradutor'
}

const arrayPessoa: Pessoa[] = [
  pessoa,
  outraPessoa
]

// outra forma der declarar

const arrayPessoa2: Array<Pessoa> = [
  pessoa,
  outraPessoa
]

const arrayNum: number[] = [
  1,2,3
]

const arrayString: Array<string> = [
  '1','2','3'
]