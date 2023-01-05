const valores =  [ 50, 80, 150,800,600,400];

let soma = 0;

for (let i = 0; i < valores.length; i++) {                  // 2080 
    const valor = valores[i]
    soma = soma + valor 
}

console.log(`O valor que você vai ganhar esse mês é de:  ${soma}`)

const gasto = [ 70, 80, 50]             
let menos = 0

for (let i = 0; i < gasto.length; i++) {           
    const gastos = gasto[i]
    menos = menos + gastos
}

console.log(`O valor que você vai gastar é de ${menos} `)

const total = soma - menos 

console.log(`O valor que irá sobrar no seu bolso é de ${total}`)
