const { Stack } = require("./index.js");
const { Queue } = require('./index.js')
describe("Stack Class", () => {
  it.skip("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    console.log(stack);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
  it("#enqueue should take an item from the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    console.log(queue);
    const qLength = queue.length
    expect(queue.length).toEqual(qLength - 1);
  })
});

describe("Queue Class", () => {
  it("#enqueue should add an item to the back", () => {
    const queue = new Queue();
    queue.enqueue("fox");
    queue.enqueue("goose");
    expect(queue.count).toBe(2);
    expect(queue.next).toBe("fox");
  });
  it("#dequeue should add an item to the back", () => {
    const queue = new Queue();
    queue.enqueue("fox");
    queue.enqueue("goose");
    const item = queue.dequeue();
    expect(queue.count).toBe(1);
    expect(queue.next).toBe("goose");
    expect(item).toBe("fox");
  });
 });

