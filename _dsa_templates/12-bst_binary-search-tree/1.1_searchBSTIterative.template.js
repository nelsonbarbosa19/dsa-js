// 12-binary-search-tree/1.1_searchBSTIterative.template.js

/**
 * Template: Procurar um valor na BST (iterativo)
 * Quando usar: Quando queres verificar rapidamente se um valor existe na BST
 *              sem usar recursão (mais eficiente em memória para árvores grandes).
 * Notas:
 * - A BST garante que todos os valores à esquerda são menores e à direita são maiores.
 * - Se a árvore for muito desbalanceada, a performance pode degradar.
 * Complexidade:
 * - Tempo O(h)
 * - Espaço O(1), onde h é a altura da árvore.
 */

function searchBST(root, val) {
  while (root) {
    if (val === root.val) return root;

    root = val < root.val ? root.left : root.right;
  }

  return null;
}

module.exports = searchBST;
