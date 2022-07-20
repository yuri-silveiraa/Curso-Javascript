const quantidade = [1,50]

for (let i = quantidade[0]; i < quantidade[1];) {
    quantidade.push(i+1)
    i++;
}
quantidade.splice(1,1)

const sorteio = Math.floor(Math.random() * quantidade.length)

console.table(quantidade[sorteio])

