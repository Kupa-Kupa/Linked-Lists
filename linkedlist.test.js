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

  test('Test size() for different lists:', () => {
    expect(list4.size()).toBe(1);
    expect(list5.size()).toBe(2);
  });

  test('Test tail() for different lists:', () => {
    expect(list4.tail()).toEqual({ value: 0, nextNode: null });
    expect(list5.tail()).toEqual({ value: 1, nextNode: null });
  });

  test('Test at(index) for different lists:', () => {
    expect(list4.at(0)).toEqual({ value: 0, nextNode: null });
    expect(list5.at(0)).toEqual({
      value: 0,
      nextNode: { value: 1, nextNode: null },
    });
    expect(list5.at(1)).toEqual({ value: 1, nextNode: null });
  });

  test('Test pop() for different lists:', () => {
    expect(list4.pop()).toEqual({ value: 0, nextNode: null });
    expect(list4.length).toBe(0);
    expect(list5.pop()).toEqual({ value: 1, nextNode: null });
    expect(list5.length).toBe(1);
  });

  test('Test contains(val):', () => {
    const list6 = new LinkedList();
    list6.append(1);
    list6.prepend(0);
    list6.append(5);

    expect(list6.contains(0)).toBe(true);
    expect(list6.contains('hello')).toBe(false);
    expect(list6.contains(1)).toBe(true);
    expect(list6.contains(6)).toBe(false);
  });

  test('Test find(val):', () => {
    const list6 = new LinkedList();
    list6.append(1);
    list6.prepend(0);
    list6.append(5);

    expect(list6.find(0)).toBe(0);
    expect(list6.find('hello')).toBe(null);
    expect(list6.find(1)).toBe(1);
    expect(list6.find(6)).toBe(null);
    expect(list6.find(5)).toBe(2);
  });

  test('Test toString():', () => {
    const list6 = new LinkedList();
    list6.append(1);
    list6.prepend(0);
    list6.append(5);

    expect(list6.toString()).toBe('( 0 ) -> ( 1 ) -> ( 5 ) -> null');
    expect(list3.toString()).toBe('( 1 ) -> ( 2 ) -> null');
    expect(list4.toString()).toBe(null);
    expect(list5.toString()).toBe('( 0 ) -> null');
  });
});
