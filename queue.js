class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }

  dequeue() {
    if (!this.first) return null;
    var temp = this.first; /// store for returning
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp.val;
  }
}

var queue = new Queue();

queue.enqueue(30);
queue.enqueue(50);
queue.enqueue(33);

queue.dequeue();

queue.enqueue(90); /// last node

// first node after these operation is 50 because we make dequeue to first element (30)

console.log(queue);
