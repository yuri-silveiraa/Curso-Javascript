const main = () => {
    const pessoa =[
    {
        nome: "Yuri",
        sobrenome: "Silveira",
        idade: 21
    },
    {
        nome: "Leticia",
        sobrenome: "Soares",
        idade: 23
    },
    {
        nome: "Luiza",
        sobrenome: "Silva",
        idade: 17
    }
]
/*
let idadeMaxima = 0
pessoa.forEach(pessoa => {
    idadeMaxima = Math.max(idadeMaxima, pessoa.idade)
})
*/

// const nomes = pessoa.map(pessoa => `${pessoa.nome} ${pessoa.sobrenome}`)

const adultos = pessoa.filter(pessoa => pessoa.idade > 18)
adultos.forEach(adulto => console.log(adulto.nome))


}

module.exports = {main}