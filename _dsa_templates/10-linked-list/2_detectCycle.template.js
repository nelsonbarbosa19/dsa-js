// 10-linked-list/2_detectCycle.template.js

/**
 * Template: Detect Cycle in Linked List
 * Quando usar: Determinar se existe um ciclo numa lista ligada.
 * Notas: Usar dois ponteiros (slow e fast) – Floyd’s Tortoise and Hare.
 * Complexidade:
 * - Tempo: O(n), percorre todos os nós no pior caso.
 * - Espaço: O(1), sem espaço extra.
 * Exemplos: 1→2→3→2 (ciclo) → true
 */

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
