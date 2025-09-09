// 11-binary-tree/4_countNodes.template.js

/**
 * Template: Contar número de nós
 * Quando usar: Para obter tamanho da árvore.
 * Complexidade:
 *  - Tempo: O(n)
 *  - Espaço: O(h)
 */

function countNodes(root) {
  if (!root) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
}
