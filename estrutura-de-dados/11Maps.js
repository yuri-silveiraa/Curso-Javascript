const meuDicionario = new Map();
meuDicionario.set ('oi','Oi tudo bem?')  // Adiciona uma chave com um valor no map 
meuDicionario.set ('blz','beleza') 
meuDicionario.set ('vc','você')

console.log(meuDicionario.delete('asda')) // deleta um elemento do map apartir da chave selecionada 

// meuDicionario.clear() // deleta tudo do map

// if (meuDicionario.has('vc')) console.log('VC existe')

/*meuDicionario.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`)
}) */

for (let entrada of meuDicionario.entries()){
    console.log(entrada)
}


for (let valor of meuDicionario.values()){
    console.log(valor)
}


for (let chave of meuDicionario.keys()){
    console.log(chave)
}

console.log(meuDicionario.size)


// ------------------------------------------
/*const meuDicionario = new Map();

const indiceContatos = [
    ['Gabriel', '993124231'],
    ['Lucas', '993124232'],
    ['Yuri', '993124233']
]

meuDicionario.set(indiceContatos[0], {nascimento: '04/07/2000'} );
meuDicionario.set(indiceContatos[1], {nascimento: '06/07/2003'} );
meuDicionario.set(indiceContatos[2], {nascimento: '10/07/2006'} );

// console.table(meuDicionario);

const yuri = meuDicionario.get(indiceContatos[2]) // chama o elemento de acordo com a chave escolhida

console.table(yuri);*/
