const chalk = require('chalk')

const main = () => {
    console.log(descricaoPreco(50,10))
}

const descricaoPreco = (preco,desconto) => {
    return `O valor total é de R$ ${preco}, mas você so paga ${preco - desconto}`
}

module.exports = {main}