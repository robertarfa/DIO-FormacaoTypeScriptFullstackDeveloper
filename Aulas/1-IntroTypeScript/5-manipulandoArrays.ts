const arraySearch: Array<number> = [1, 2, 3, 4];

// const buscaNum = arraySearch.find(num => num > 2)

// //find retorna o primeiro elemento do array que atende essa condição, caso não exista será undefined

// console.log(buscaNum)

// console.log(arraySearch) //[1,2,3,4]
// arraySearch.forEach(num => console.log(num)) //1 2 3 4

arraySearch.forEach(num => {
  if (num > 2) {
    console.log(num);
  }
});

arraySearch.map(num => console.log(num)); //

//map pode ser usados com funções assíncronas, o forEach acaba ocorrendo de forma paralela. O foreach é um pouco mais lento que o map.