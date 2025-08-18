// 12-binary-search-tree/4_findMinBST.template.js

/**
 * Template: Encontrar valor mínimo numa BST
 * Quando usar: Quando precisas encontrar rapidamente o menor valor da árvore.
 * Notas:
 * - O menor valor está sempre na folha mais à esquerda.
 * Complexidade:
 * - Tempo O(h)
 * - Espaço O(1).
 */

function findMinBST(root) {
  if (!root) return null;

  while (root.left) {
    root = root.left;
  }

  return root;
}

module.exports = findMinBST;
