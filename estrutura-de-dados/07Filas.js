
class Fila {
    constructor(){
        this.itens = []
    }

    enqueue(item){
        this.itens.push(item)
    }

    isEmpety() {
        return this.itens.length == 0
    }

    dequeue(){
        if (this.isEmpety()) return undefined

        return this.itens.shift()
    }

    front(){
        return this.itens[0]
    }

    rear(){
        return this.itens[this.itens.length - 1]
    }
}

const fila = new Fila()
fila.enqueue('Ferrari')
fila.enqueue('Fusca')
fila.enqueue('Del Rey')
fila.enqueue('HB20')
fila.dequeue()

console.table(fila)
console.log(fila.isEmpety())
console.log(fila.front())
console.log(fila.rear())
