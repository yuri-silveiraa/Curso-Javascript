let frutas = new Array('Abacaxi')

frutas.push('Banana') // adiciona um elemento na array 
frutas.push('Morango')
frutas.push('Maçã')
frutas.unshift('tangerina');

frutas.pop() // remove o ultimo elemento da array 
frutas.shift() // remove o primeiro elemento da array
frutas.splice(2,1,'Mamão') // deleta o elemento escolhido e pode substitui-lo
console.table(frutas)

