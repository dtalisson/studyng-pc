
/*
        COMO CALCULAR O VALOR DE GASTOS DE COMBUSTIVEL E O LITROSPORKM 
        E COMO SABER SE O VALOR PASSOU DE 30 REAIS E SE PASSOU VAI DAR TRUE E SE NÃO, VAI DAR FALSE

1 - Preço do combustivel 
2 - Gasto médio de combustivel de carro por KM
3 - Distancia em KM da viagem



const precoCombustivel = 5.79;
const litrosPorKm = 12;
const distanciaEmKm = 70;

const litrosConsumidos = distanciaEmKm / litrosPorKm;
const valorGasto = litrosConsumidos * precoCombustivel;
const totalGasto = valorGasto > 30
console.log('Seu valor gasto foi de: ' + valorGasto.toFixed(2))
console.log(totalGasto)


*/




/* 
            COMO SABER SE O NÚMERO É PAR OU IMPAR  

let  numero = 3                   
let numeroPar = numero % 2;
console.log(numeroPar)
*/

/*                                  COMO SABER SE O NÚMERO É PAR OU IMPAR 
                                    E TAMBÉM SABER SE É TRUE OU FALSE 
                                    
let numero = 9;
let numeroPar = numero % 2 === 0;
console.log(numeroPar) 
*/


                

/*                                      TRANSFORMANDO O NUMERO PAR E IMPAR 
                                        COM O COMANDO DE IF 

const numero = 9;
const numeroPar =(numero%2) === 0;
console.log(numeroPar)
        
if (numeroPar) { 
        console.log('O seu numero foi Par.')
}
else { 
        console.log(' O seu número foi impar.')
}

*/

/*                                                      TRANSFORMANDO NUMERO PAR E IMPAR
                COM AS CONDIÇÕES CASO O NÚMERO FOR 0 ELE DE INVALIDO E CASO O NUMERO SEJA DIVISIVEL POR 5, ELE IMPRIMA DIVISIVEL, CASO NÃO, NÃO DIVISIVEL. 
const numero = 0 
const numeroDivisivelPor5 = (numero%5) === 0;
console.log(numeroDivisivelPor5);


if ( numero === 0) {
        console.log('Numúmero Invalido.')
}
else if ( numeroDivisivelPor5) { 
        console.log('O número é divisivel.')
} 
else { 
        console.log(' O número não é divisivel.')
}


*/


                               /* 
                               CALCULANDO IMC 
                               COM IF E ELSE E DANDO 3 RESTRIÇÕES 
                               
 3 condicionais
 1 - Peso
 2 - Altura
 3 - IMC                               
                               


const PesoDoPaciente = 40                   
const AlturaDoPaciente = 1.70
const IMCDoPaciente = PesoDoPaciente / ( AlturaDoPaciente * AlturaDoPaciente );

console.log('Seu IMC É : '+IMCDoPaciente.toFixed(1))

 if (IMCDoPaciente <= 18.5) { 
        console.log('Abaixo do peso.')
 } else if (IMCDoPaciente >= 18.6 &&  IMCDoPaciente <=24.9) { 
        console.log('Peso Normal.');
} else {
        console.log('Sobrepreso.')

}

 */ 





 



 /*                                     CALCULANDO QUANTO DE GASTO VOCÊ TEM DE COMBUSTIVEL POR KM
                                                E SE VAI SER ETANOL OU GASOLINA NORMAL 


 5 RESTRIÇÕES *
1 - preço do etanol 
2 - preço da gasolina 
3 - o tipo de combustivel que está no seu carro
4 - gasto médio de combustivel do carro por km
5 - distancia em km da viagem 
Imprima o valor gasto de combustivel no console e se vai ser etanol ou gasolina.

                                             
const precoEtanol = 3.23;
const precoGasolina = 5.25 
const gastoMedioEmKM = 12
const distanciaEMKM = 51.2
const tipoCombustivel = 'etanol'


if (tipoCombustivel === 'etanol') { 
        const litrosConsumidos = distanciaEMKM / gastoMedioEmKM;
        const valorTotal = litrosConsumidos * precoEtanol;
        console.log('O tipo de gasolina é:' +tipoCombustivel )
        console.log(valorTotal.toFixed(2))
}
else if (tipoCombustivel === 'gasolina') { 
        const litrosConsumidos = distanciaEMKM / gastoMedioEmKM;
        const valorTotal = litrosConsumidos * precoGasolina;
        console.log('O tipo de gasolina é:' +tipoCombustivel )
        console.log(valorTotal.toFixed(2))
}
else { 
        console.log('não conseguimos')
}

*/






/*
1 - Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre de faculdade, calcule e imprima a sua média e sua classificação conforme a tabela abaixo:


Média = (nota 1 + nota 2 + nota 3 ) / 3 

Classificação : 
- Média menor que 5, reprovação;
- Média entre 5  e 7, recuperação; 
- Média acima de 7, passou;



const mediaAluno1 = 10 
const mediaAluno2 = 7
const mediaAluno3 = 8
const mediaTotal = (mediaAluno1 + mediaAluno2 + mediaAluno3) / 3 

console.log('Sua média é: '+mediaTotal.toFixed(1))

if (mediaTotal < 5 ) { 
        console.log('você foi reprovado')
} else if (mediaTotal >= 5 && mediaTotal <= 7) { 
        console.log('Você está na recuperação ')
}
else { 
        console.log(' Você foi aprovado')
}
*/ 


/*  Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 
const precoEtiqueta = 100
const tipoPagamento = 5 


if (tipoPagamento === 1 ) { 
        let precoTotal = precoEtiqueta * 0.1
        console.log(precoEtiqueta - precoTotal)
} else if ( tipoPagamento === 2 ) { 
        let precoTotal = precoEtiqueta * 0.15
        console.log(precoEtiqueta - precoTotal)
} else if ( tipoPagamento === 3 ) { 
        let precoTotal = precoEtiqueta
        console.log(precoTotal)
} else { 
        let precoTotal = precoEtiqueta * 0.1
        console.log(precoEtiqueta + precoTotal)
}

*/
