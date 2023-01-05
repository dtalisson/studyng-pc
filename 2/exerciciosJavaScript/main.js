const { gets, print} = require('./funcao-auxiliar');

const quantidadeDeAlunos = gets()
let maiorValorEncontrado = 0;

for (let i = 0; i< quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();       // ta chamando o gets que no caso seria a entrada da funcao auxiliar 
  if ( numeroSorteado > maiorValorEncontrado) {    // caso o numeroSorteado da vez for maior que o maior valor encontrado 
    maiorValorEncontrado = numeroSorteado           // o maiorvalor encontrado vai passar a ser o maior numerosorteado
  }




}

print(maiorValorEncontrado)             // aqui vai ser impresso o maior numero que o sistema achou na entrada