// 10-linked-list/3_mergeTwoSortedLists.template.js

/**
 * Template: Merge Two Sorted Lists
 * Quando usar: Mesclar duas listas ligadas ordenadas em uma lista ordenada.
 * Notas: Usar dummy node para simplificar a ligação.
 * Complexidade:
 * - Tempo: O(n + m), onde n e m são os tamanhos das listas.
 * - Espaço: O(1), in-place.
 * Exemplos: [1,2,4], [1,3,4] → [1,1,2,3,4,4]
 */

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  current.next = l1 || l2;

  return dummy.next;
}
