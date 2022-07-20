const saldoContas = [['banco 1',100],
['banco 2',200],
['banco 3',40],
['banco 4',300]]

const total = saldoContas.reduce((acumulador,valor) => acumulador + valor)

console.log(total)