// 12-binary-search-tree/5_findMaxBST.template.js

/**
 * Template: Encontrar valor máximo numa BST
 * Quando usar: Quando precisas encontrar rapidamente o maior valor da árvore.
 * Notas:
 * - O maior valor está sempre na folha mais à direita.
 * Complexidade:
 * - Tempo O(h)
 * - Espaço O(1).
 */

function findMaxBST(root) {
  if (!root) return null;

  while (root.right) {
    root = root.right;
  }

  return root;
}
