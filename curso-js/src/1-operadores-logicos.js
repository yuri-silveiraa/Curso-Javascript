const chalk = require('chalk')

const main = () => {
  console.log(chalk.blue('Curso JS'))

  const pessoa = {
    nome: "Yuri",
    endereco: {
        logradouro: "rua A",
        complemento: 88
    }
  }

  console.log(primeiro([2,4,6,2]))
}

const primeiro = (lista) => {
    return lista && lista[0] // o operador && se a lista for verdadeira, u seja, se ela existir exebi o que esta a direita 
}

const complemento = (pessoa) => {
    const complemento = pessoa?.endereco?.complemento || "---"; // o operador ? serve para validar o objeto 
    return "Complemento " + complemento;
}

const imprimeSaudacao = (nome) => {
    const name = nome || 'Visitante' // aqui temos o ou || que serve para exebir o que esta a direita caso o primeiro seja vazio, alem do null e undefined considera valores logicos falsos tambem.
    return "Olá, " + name;   
}


const imprime = (nome) => {
    const name = nome ?? 'Visitante' // essencia nula ?? quando o lado esquerdo for null ou undefined ira mostrar o lado direito 
    return "Olá, " + name;   
}



module.exports = {main};
