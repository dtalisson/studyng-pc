 
 /* INCREMENTANDO JUROS COM JAVA SCRIPT */ 

function IncrementarJuros ( valor, percentualJuros) {                       /* iniciando a função com parametros do lado, um vai ser o valor e outro o percentual de juros */
        const valorComAcrecimo = (percentualJuros / 100) * valor            /* iniciando uma variavel em que vai ser chamado o percentual / 100 + o valor dado na variavel */
        return valor + valorComAcrecimo }                                      /* retornando o valor + o valor do acrescimo que no caso seria o percentual */


console.log(IncrementarJuros (100, 25))         /* chamando a variavel do juros, o 100 seria o valor e o 25 seria o percentual de juros
                                                            função é valor  + valorComAcreimo = 100 + 25% */



                                                            

