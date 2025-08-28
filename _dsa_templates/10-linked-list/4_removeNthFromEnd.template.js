// 10-linked-list/4_removeNthFromEnd.template.js

/**
 * Template: Remove N-th Node From End
 * Quando usar: Remover o n-ésimo nó a partir do fim da lista.
 * Notas: Usar dois ponteiros com diferença de n nós.
 * Complexidade:
 * - Tempo: O(n), percorre a lista uma vez.
 * - Espaço: O(1), in-place.
 * Exemplos: [1,2,3,4,5], n=2 → [1,2,3,5]
 */

function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let first = dummy;
  let second = dummy;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
}
