import Node from './node.js';

const nodeOne = new Node();
const nodeTwo = new Node('Node Value');

describe('Node Tests', () => {
  test('Properly creates node', () => {
    expect(nodeOne);
    expect(nodeTwo);
  });

  test('Creating a new node with no arguments, new Node(): node.value = null, node.nextNode = null', () => {
    expect(nodeOne.value).toBe(null);
    expect(nodeOne.nextNode).toBe(null);
  });

  test('Creating a new node with a value argument, new Node("Node Value"): node.value = "Node Value", node.nextNode = null', () => {
    expect(nodeTwo.value).toBe('Node Value');
    expect(nodeTwo.nextNode).toBe(null);
  });
});
