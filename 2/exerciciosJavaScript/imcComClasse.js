class Aluno { 
    nome;
    altura;
    peso;

    constructor(nome,altura,peso) {   // inserindo os atributos que vão ser obrigatórios serem passados no parametros
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC(altura,peso) { 
        return peso/ Math.pow(altura,2)             // fazendo o calculo do imc peso / altura * altura
    }

    classificarIMC() {                              // criando o if e else 
        const imc = this.calcularIMC(); 
        

        if (imc <= 18.5) { 
            return 'Abaixo do peso'
                } else if (imc >= 18.6 &&  imc <=24.9) { 
            return 'Peso Normal.'
                } else {
            return 'Sobrepreso.' 
      }
    }
    }
 



const Darlan = new Aluno('Darlan',1.69,74);         // criando a classe com os atributos de nome, altura e peso conforme foram pedidos lá em cima
console.log(Darlan)                                     
console.log(Darlan.calcularIMC(1.69,74))            // toda vez que for consultar no console logo colocar o nome da variavel criada antes
console.log(Darlan.classificarIMC())                // que seria ( variavel. o construtor) que no caso foi Darlan.ClassificarIMC()




