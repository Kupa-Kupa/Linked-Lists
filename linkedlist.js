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
    // console.log('temp is', temp);
    this.head = temp;
    // console.log('this.head is', this.head);
    this.length++;
    return;
  }

  // size returns the total number of nodes in the list
  size() {
    return this.length;
  }

  // tail returns the last node in the list
  tail() {
    if (this.length < 2) {
      return this.head;
    }

    let temp = this.head;

    for (let i = 1; i <= this.length; i++) {
      if (i === this.length) {
        return temp;
      } else {
        temp = temp.nextNode;
      }
    }
  }

  // at(index) returns the node at the given index
  at(index) {
    if (index === 0) {
      return this.head;
    }

    // want to start at index 1
    let temp = this.head.nextNode;

    for (let i = 1; i <= this.length; i++) {
      if (i === index) {
        return temp;
      } else {
        temp = temp.nextNode;
      }
    }
  }

  // pop removes the last element from the list
  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length--;
      return temp;
    }

    let temp = this.head;
    let prev = temp;

    for (let i = 1; i <= this.length; i++) {
      if (i === this.length) {
        prev.nextNode = null;
        this.length--;
        return temp;
      } else {
        prev = temp;
        temp = temp.nextNode;
      }
    }
  }

  // contains(value) returns true if the passed in value is in the list
  // and otherwise returns false.
  contains(val) {
    if (this.length === 0) return false;

    let temp = this.head;
    // console.log('temp is', temp);

    for (let i = 1; i <= this.length; i++) {
      if (temp.value === val) {
        return true;
      } else {
        temp = temp.nextNode;
      }
    }

    return false;
  }

  // find(value) returns the index of the node containing value, or null
  // if not found.
  find(val) {
    if (this.length === 0) return null;

    let temp = this.head;
    let index = 0;

    for (let i = 0; i < this.length; i++) {
      if (temp.value === val) {
        return index;
      } else {
        temp = temp.nextNode;
        index++;
      }
    }

    return null;
  }

  // toString represents your LinkedList objects as strings, so you can
  // print them out and preview them in the console. The format should
  // be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    if (this.length === 0) return null;

    let temp = this.head;
    let listString = `( ${this.head.value} ) -> `;

    for (let i = 1; i <= this.length; i++) {
      if (i === this.length) {
        return listString + `null`;
      } else {
        temp = temp.nextNode;
        listString += `( ${temp.value} ) -> `;
      }
    }
  }

  // insertAt(value, index) that inserts a new node with the provided
  // value at the given index.
  insertAt(value, index) {
    // if index is outside the range of the list then add it to the end
    if (this.length === 0) {
      this.head = new Node(value);
      this.length++;
      return;
    } else if (index >= this.length) {
      this.append(value);
      return;
    } else if (index < 1) {
      this.prepend(value);
      return;
    }

    let temp = this.head;
    let prev = temp;
    let indexCounter = 0;

    for (let i = 0; i < this.length; i++) {
      if (indexCounter === index) {
        let newNode = new Node(value);
        newNode.nextNode = temp;
        prev.nextNode = newNode;
        this.length++;
        return;
      } else {
        prev = temp;
        temp = temp.nextNode;
        indexCounter++;
      }
    }
  }

  // removeAt(index) that removes the node at the given index.
  removeAt(index) {
    if (this.length === 0) {
      return;
    } else if (index >= this.length) {
      return;
    } else if (index === this.length - 1) {
      this.pop();
      return;
    } else if (index < 0) {
      return;
    } else if (index === 0) {
      let tmp = this.head;
      console.log('this.head', this.head);
      console.log('tmp.nextNode', tmp.nextNode);
      this.head = tmp.nextNode;
      console.log('this.head', this.head);
      this.length--;
      return;
    }

    let temp = this.head;
    let prev = temp;
    let indexCounter = 0;

    for (let i = 0; i < this.length; i++) {
      if (indexCounter === index) {
        prev.nextNode = temp.nextNode;
        this.length--;
        return;
      } else {
        prev = temp;
        temp = temp.nextNode;
        indexCounter++;
      }
    }
  }
}
