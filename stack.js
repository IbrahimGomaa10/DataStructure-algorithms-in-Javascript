/// Start make a node for stack

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /// 1 - [first, last]
  /// 2 - [newNode, first, last] first become = newNode
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.length;
  }
  pop() {
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

var stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(500);
stack.pop();
stack.pop();
console.log(stack);
