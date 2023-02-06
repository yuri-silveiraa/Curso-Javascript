const main = () => {
    const pessoa = {
        nome: "Yuri",
        sobrenome: "Silveira",
        idade : "21"
    }

    imprimeDados(pessoa)

    const [min,max] = [10,20] 
    console.log(min)

    const [primeiro, ... resto] = [1,4,5,23,45]
    console.log(primeiro)
    console.log(resto)
}

const imprimeDados =({nome, sobrenome,idade}) => {  // colocando as propriedades a serem buscadas facilita na usabilidade do codigo, tendo assim um codigo mais limpo e enxuto 
    console.log(`Nome: ${nome} ${sobrenome}`)
    console.log(`Idade: ${idade}`)
}

module.exports = {main}