const main = () => {
this.nome = 'Yuri'
this.sobrenome = 'Silveira'

    const pessoa = {
        nome: 'Yuri',
        sobrenome: 'Silveira',
        nomeCompleto: () => { // caso seja arrow function os atributos tem que ser passados fora do objeto
            return `${this.nome} ${this.sobrenome}` // para chamar a propriedade de um objeto para uma função é necessario usar o this. 
        }
    }
}

const imprimeMin = (lista) => {
    let min = Number.MAX_VALUE;  
    const mensagem = 'O resultado do menor valor: '
    for (let i = 0; i < lista.length; i++) {
        const mensagem = 'menor valor: '; // Var é um variavel global que pode ser usada em qualquer local do codigo assim podendo ter problemas com sobreposição no codigo, por isso é mais utilizado let ou const
        min = Math.min(lista[i], min)  
        console.log(`${mensagem} ${min}`)
    }

    console.log(`${mensagem} ${min}`)
}

module.exports = { main }