class CircularQueue {
  constructor(length) {
    this.arr = [];
    this.arr.length = length;
    this.arr.fill(null);
  }

  enqueue(data) {
    if (this.arr.includes(null)) {
      for (let idx = 0; idx < this.arr.length; idx += 1) {
        if (this.arr[idx] === null) {
          this.arr[idx] = data;
          break;
        }
      }
    } else {
      this.arr[0] = data;
      this.rotate();
    }
  }

  dequeue() {
    let element = this.arr[0];
    this.arr[0] = null
    this.rotate();
    return element;
  }

  rotate() {
    let moveToBack = this.arr.shift();
    this.arr.push(moveToBack);
  }
}


let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);