class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(item) {
    this.top++;
    this.data[this.top] = item;
    console.log(`${item} entrou da pilha`)

    return this.data
  }
  pop() {
    if (this.top < 0) return undefined;

    const poppedTop = this.data[this.top];
    console.log(`${poppedTop} saiu da pilha`)

    delete this.data[this.top];
    this.top--;

    return poppedTop;
  }
  peek() {
    console.log(`${this.data[this.top]} é o último da fila`)
    return this.top >= 0 ? this.data[this.top] : undefined
  }
}

const stack = new Stack();

console.log(`
Pilha... o último a entrar será o primeiro a sair`)

stack.push('rafael')
stack.push('danielle')
stack.push('davi')

stack.peek()
console.log('')

stack.pop();
stack.pop();
stack.pop();