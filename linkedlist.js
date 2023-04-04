import Node from './node.js';

export default class LinkedList {
  // what if the node being passed to the linked list is a linked list?
  // length would probably be annoying to calculate.
  // so starting with an empty list every time is probably easiest and
  // prone to less errors
  /*
  constructor(head = null) {
    this.head = head;
    if (this.head === null) {
      this.length = 0;
    } else {
      this.length = 1;
    }
  }
  */

  constructor() {
    this.head = null;
    this.length = 0;
  }

  head() {
    return this.head;
  }

  append(value) {
    Node(value);
  }

  prepend(value) {}

  size() {}

  tail() {}

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}

  insertAt(value, index) {}

  removeAt(index) {}
}
