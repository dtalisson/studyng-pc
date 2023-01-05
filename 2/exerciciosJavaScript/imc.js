function calcularIMC(peso,altura) { 
    return peso/ Math.pow(altura,2) 
}

function classificarIMC(imc) { 
    if (imc <= 18.5) { 
        return 'Abaixo do peso'
 } else if (imc >= 18.6 &&  imc <=24.9) { 
        return 'Peso Normal.'
} else {
        return 'Sobrepreso.' 
  }
}

function main ()  { 
const peso = 74
const altura = 1.70
const imc = calcularIMC(peso,altura)

console.log(classificarIMC(imc)) 
} // main 
main()