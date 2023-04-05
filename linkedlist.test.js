import LinkedList from './linkedlist.js';
import Node from './node.js';

const list = new LinkedList();

const list2 = new LinkedList();
list2.append(1);

const list3 = new LinkedList();
list3.append(1);
list3.append(2);

const list4 = new LinkedList();
list4.prepend(0);

const list5 = new LinkedList();
list5.append(1);
list5.prepend(0);

describe('Linked List Tests', () => {
  test('Properly creates list, new LinkedList(): list.head = null, list.length = 0', () => {
    expect(list);
    expect(list.head).toBe(null);
    expect(list.length).toBe(0);
  });

  test('Test append(value) for an empty list: list.head = node, list.length = 1', () => {
    expect(list2.head).toEqual({ value: 1, nextNode: null });
    expect(list2.length).toBe(1);
  });

  test('Test append(value) for an non-empty list: list.head = node, list.length = 2', () => {
    expect(list3.head).toEqual({
      value: 1,
      nextNode: { value: 2, nextNode: null },
    });
    expect(list3.length).toBe(2);
  });

  test('Test prepend(value) for an empty list: list.head = node, list.length = 1', () => {
    expect(list4.head).toEqual({ value: 0, nextNode: null });
    expect(list4.length).toBe(1);
  });

  test('Test prepend(value) for an non-empty list: list.head = node, list.length = 3', () => {
    expect(list5.head).toEqual({
      value: 0,
      nextNode: { value: 1, nextNode: null },
    });
    expect(list5.length).toBe(2);
  });
});
