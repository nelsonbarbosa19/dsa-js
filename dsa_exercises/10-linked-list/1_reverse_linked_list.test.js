// 1_reverse_linked_list.test.js

/**
 * Descrição:
 * Dada a cabeça de uma linked list, inverte a lista e retorna a nova cabeça.
 *
 * Exemplos:
 * reverseLinkedList(1 -> 2 -> 3 -> 4 -> 5) => 5 -> 4 -> 3 -> 2 -> 1
 * reverseLinkedList(1 -> 2) => 2 -> 1
 * reverseLinkedList(null) => null
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function reverseLinkedList(head) {
  let prevNode = null;
  let currNode = head;

  while (currNode) {
    const nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  return prevNode;
}

module.exports = { ListNode, reverseLinkedList };

/* Testes Jest */
describe("reverseLinkedList", () => {
  test("exemplo 1", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const reversed = reverseLinkedList(head);
    let result = [];
    let node = reversed;
    while (node) {
      result.push(node.val);
      node = node.next;
    }
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  test("exemplo 2", () => {
    const head = new ListNode(1, new ListNode(2));
    const reversed = reverseLinkedList(head);
    let result = [];
    let node = reversed;
    while (node) {
      result.push(node.val);
      node = node.next;
    }
    expect(result).toEqual([2, 1]);
  });

  test("exemplo 3 - lista vazia", () => {
    expect(reverseLinkedList(null)).toBeNull();
  });
});
