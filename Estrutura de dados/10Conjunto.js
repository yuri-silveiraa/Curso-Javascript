/*const meuConjunto = new Set()

//const times = ['São Paulo', 'Flamengo', 'Fluminense', 'Palmeiras', 'São Paulo']
//const meuCampeonato = new Set(times)

//console.table(meuCampeonato)

meuConjunto.add('Yuri')
meuConjunto.add('Yuri')
meuConjunto.add(2000)
meuConjunto.add(true)
meuConjunto.add(true)
meuConjunto.add(['Yuri', 'Amanda'])
meuConjunto.add({nome: 'Yuri'})
const cdfs = ['Yuri', 'Amanda']
meuConjunto.add(cdfs)
meuConjunto.delete(cdfs)
*/

//meuConjunto.clear()
/*meuConjunto.forEach((valor) => { //acesar os valores do conjunto 
    console.table(valor)
})*/

/*const valoresConjunto = meuConjunto.values() //Checar os valores do conjunto
console.table(valoresConjunto.next().value) // mostra o valor do primeiro elemento e depois o proximo e assim sucesivamente
for (let valor of valoresConjunto) {
    console.log(valor)
}*/

/*
const entradas = meuConjunto.entries()
for (let entrada of entradas) {
    console.log(entrada)
}*/

//console.table(meuConjunto)

const cdfs = new Set(['Yuri', 'Amanda','Lucas'])

if (!cdfs.has('Gui')) cdfs.add('Gui')

console.table(cdfs)

console.log(cdfs.size)