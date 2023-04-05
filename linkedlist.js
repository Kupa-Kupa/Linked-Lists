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

  // head returns the first node in the list
  // if this is head() tests don't recognise it as a function?
  // probably bc of methods and properties cant share a name?
  headNode() {
    return this.head;
  }

  // append(value) adds a new node containing value to the end of the list
  append(value) {
    if (this.length === 0) {
      this.head = new Node(value);
      this.length++;
      return;
    }

    let temp = this.head;

    for (let i = 1; i <= this.length; i++) {
      if (i === this.length) {
        temp.nextNode = new Node(value);
        this.length++;
        return;
      } else {
        temp = temp.nextNode;
      }
    }
  }

  // prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    let temp = new Node(value);
    temp.nextNode = this.head;
    this.head = temp;
    this.length++;
    return;
  }

  // size returns the total number of nodes in the list
  size() {
    return this.length;
  }

  // tail returns the last node in the list
  tail() {}

  // at(index) returns the node at the given index
  at(index) {}

  // pop removes the last element from the list
  pop() {}

  // contains(value) returns true if the passed in value is in the list
  // and otherwise returns false.
  contains(value) {
    if (LinkedList.length === 0) return false;
  }

  // find(value) returns the index of the node containing value, or null
  // if not found.
  find(value) {}

  // toString represents your LinkedList objects as strings, so you can
  // print them out and preview them in the console. The format should
  // be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {}

  // insertAt(value, index) that inserts a new node with the provided
  // value at the given index.
  insertAt(value, index) {}

  // removeAt(index) that removes the node at the given index.
  removeAt(index) {}
}
