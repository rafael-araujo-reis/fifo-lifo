class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
    listQueue.innerHTML += `<li>${item}</li>`
    console.log(`${item} entrou na fila`)
  }

  dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila`)
  }
}

const fifo = new Queue();

console.log(`
Fila... o primeiro a entrar será o primeiro a sair`)

fifo.enqueue('davi')
fifo.enqueue('filipe')
fifo.enqueue('bernardo')
fifo.enqueue('maria')

console.log('')

fifo.dequeue('davi')
fifo.dequeue('filipe')
fifo.dequeue('bernardo')
fifo.dequeue('maria')