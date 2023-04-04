import Node from './node.js';

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
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
