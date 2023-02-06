const redesSociais = [
  'instagram',
  'YouTube',
  'Facebook',
  'Twitter',
  'Tiktok',
  'LinkedIn',
  'Pinterest'
]

const tiktok = redesSociais.indexOf('Tiktok') // me diz em qual posição esta esse elemento na array 

console.log(tiktok)

console.log(redesSociais.includes('Tumblr')) // me diz se este elemento esta incluido na array

for (let i = 0; i< redesSociais.length; i++) {
    console.log(redesSociais[i])  // exibi toda minha array 
}

for (const i in redesSociais){
    console.log(`${i}: ${redesSociais[i]}`) // me mostra a posição de cada um na array 
}


/*
for (const valor of redesSociais) {
    console.log(valor)   // me mostra o valor de cada indice 
}

redesSociais.forEach((valor, indice, redes)=>{  
    console.log(valor)
    console.log(indice)  // me mostra o valor, o indice e tambem toda array 
    console.log(redes)
} )
*/
let i = 0
/*
while(i < redesSociais.length) {
    console.log(redesSociais[i])
    i++
}
*/
do {
    console.log(redesSociais[i])
    i++
} while ( i < redesSociais.length )