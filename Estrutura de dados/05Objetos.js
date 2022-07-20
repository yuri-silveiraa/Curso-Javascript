/*
const programador = {
    nome: ['Yuri'],
    nascimento: ['25/09/2000'],
    casado: [false],
    linguagensFavoritas: ['JavaScript','PHP','C#'],
    trabalhoDesde:[2021],
}; // object literaly notation 

console.table(programador)
*/


class Programador { //constructor define uma estrutura onde pode ser utilizada varias vezes 
    constructor(nome, nascimento, casado, linguagensFavoritas = [], trabalhoDesde = null){
        this.nome = nome 
        this.nascimento = nascimento
        this.casado = casado
        this.linguagensFavoritas = linguagensFavoritas
        this.trabalhoDesde = trabalhoDesde 
    }

}

const Yuri = new Programador('Yuri Silveira', '25/09/2000', true, ['JavaScript', ' PHP', ' C#'], 2021)

 console.table(Yuri)

for (const propriedade in Yuri ){
    console.log(`${propriedade}: ${Yuri[propriedade]}`)
}

const Lucas = new Programador('Lucas', '10/10/2000', true, ['JavaScript', ' PHP', ' C#'], 2021)

console.table(Lucas)

console.log(Yuri['nascimento'])