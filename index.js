class Stack {
  #list = [];
  
  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }
  push(item) {
    [...this.#list];
    
  }
  removeItem() {
    this.#list.pop();
  }
  get peek() {
    return(this.#list.peek(1));
  }
  get list() {
    return this.#list;
  }

}
// Stack instances
const newStack = new Stack(['fox','goose','shark']);
newStack.push('llama');

console.log(newStack.push.length);

// Queue Class
class Queue {
  #list;

  constructor(initialList) {
    this.#list = list || [];
  }
  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    return this.#list.
  }

  get count() {
    return this.#list.length;
  }

  get next() {
    return this.#list[0];
  }
}

module.exports = { Stack, Queue };
