import LinkedList from './linkedlist.js';
import Node from './node.js';

const list = new LinkedList();

// const node = new Node();
// const list2 = new LinkedList(node);

describe('Linked List Tests', () => {
  test('Properly creates list', () => {
    expect(list);
  });

  test('Creating a new list with no arguments, new LinkedList(): list.head = null', () => {
    expect(list.head).toBe(null);
    expect(list.length).toBe(0);
  });

  //   test('Creating a new list from node, new LinkedList(node): list.head = node', () => {
  //     expect(list2.head).toBe(node);
  //     expect(list2.length).toBe(1);
  //   });

  //   test('Creating a new list from node, new LinkedList(node): list.head = { value: null, nextNode: null }', () => {
  //     expect(list2.head).toEqual({ value: null, nextNode: null });
  //   });
});
