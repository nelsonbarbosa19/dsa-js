// 10-linked-list/1_reverseLinkedList.template.js

/**
 * Definição de nó de lista ligada
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Template: Reverse Linked List
 * Quando usar: Reverter uma lista ligada simples ou parte dela.
 * Notas: Usar três ponteiros (prev, current, next).
 * Complexidade:
 * - Tempo: O(n), percorre todos os nós uma vez.
 * - Espaço: O(1), in-place.
 * Exemplos: [1,2,3] → [3,2,1]
 */

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
