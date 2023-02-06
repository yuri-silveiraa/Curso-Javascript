class Deque {
    constructor(){
        this.itens = []
    }

    insertFront(item){
        return this.itens.unshift(item)
    }
    insertLast(item){
        return this.itens.push(item)
    }
    deleteFront(){
        if (this.isEmpty()) return undefined
        return this.itens.shift() 
    }
    deleteLast(){
        if (this.isEmpty()) return undefined
        return this.itens.pop()
    }
    isEmpty(){
        return this.itens.length == 0
    }	
    front(){
        return this.itens[0]
    }
    rear(){
        return this.itens[this.itens.length - 1]
    }
}

const deque = new Deque()
deque.insertFront('Ferrari')
deque.insertFront('Fusca')
deque.insertFront('HB20')
deque.insertLast('Lamborghni')
deque.insertLast('Vectrar')

deque.deleteFront()
deque.deleteLast()

console.table(deque)
console.log(deque.front())
console.log(deque.rear())