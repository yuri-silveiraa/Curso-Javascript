/*
const aPagarEmReais = [10,20,40,100]
const cotacaoDolar = 5
const aPagarEmDolar = aPagarEmReais.map( (valor) => valor * cotacaoDolar ) 
// gera uma nova array com os valores alterados atraves da arrow function 
console.table(aPagarEmDolar)
*/

/*
const aPagarEmReais = [10,20,40,100]
const aPagarVanessa = aPagarEmReais.filter( (valor) => valor >30)
// achar quais elementos do array atende as condições 
console.table(aPagarVanessa)
*/

/*
const aPagarEmReais = [10,20,40,100]
const aPagarVanessa = aPagarEmReais.find( (valor) => valor >30)
// achar qual o primeiro elemento do array retorna nessas condições, pode-se usar tambem findIdex 
console.table(aPagarVanessa)
*/

/*
const aPagarEmReais = [10,20,40,100]
const totalAPagar = aPagarEmReais.reduce( (acumulador, valor) => acumulador + valor, 0)
//soma o valor de todas os elementos no array 
console.table(totalAPagar)
*/

/*
const aPagarEmReais = [10,20,40,100]
const contasBaixas = aPagarEmReais.every( (valor) => valor <30)
// retorna true ou false se todos estiverem dentro ou fora da condição 
console.table(contasBaixas)
*/ 

/*
const aPagarEmReais = [10,20,40,100]
const contasBaixas = aPagarEmReais.some( (valor) => valor <30)
// retorna True ou false se ao menos um elemento atende ou não as condições
console.table(contasBaixas)
*/

/*
const contasDoYuri = [20,40,80,200]
const contasDaAmanda = [10,20,40,100]
const contasDosDois = contasDoYuri.concat(contasDaAmanda)
// vai juntar a array com um parametro formando uma unica array 
console.table(contasDosDois)
*/

/*
contasDosDois.fill(0) // zera todos os elementos 
console.table(contasDosDois)
*/

/*
const contasDoYuri = [20,40,80,200[2,4,5,2]]
const novasContasDoYuri = contasDoYuri.flat()// outra forma de juntar arrays
console.table(novasContasDoYuri)
*/

/*
const numeros = [2,5,3,9,6]
console.table(numeros)
numeros.sort((a,b) => a - b) //ordena a array (a-b) = crescente,  (b-a) = decrescente 
console.table(numeros)
*/


const clientes = [
['joao',2],
['maria',5],
['yuri',3],
['lucas',9],
['yari',6]
]
console.table(clientes)
clientes.sort((a,b) => b[1] - a[1])
console.table(clientes)