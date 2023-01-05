const notas = [];

notas.push(2)
notas.push(3)
notas.push(7)



let soma = 0;

for (let i = 0; i < notas.length; i++) {
   const nota = notas[i];
   soma = soma + nota            // o valor de soma é 0, porém assim que somado com a nota da o valor da nota e a soma vai ser o valor da nota anterior
                            // por exemplo, soma = 0, porém 0 + 2 é igual a 2. então soma vai valer 2
}                           // ai na segunda repetição ao invês de somar ser 0 vai ser 2, então 2 + 3 = 5
                            // então soma vai ser igual a 5, então 5 + 2 = 12, o resultado vai ser imprimido 12 
console.log(soma)           // calculo de forma mais fácil 
                                // soma + nota      soma + nota                 soma+nota
                                // 0 + 2 = 2            2 + 3 = 5                  5 + 7 = 12                 
const media = soma / notas.length
console.log(media)

    