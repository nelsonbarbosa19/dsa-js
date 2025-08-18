// 12-binary-search-tree/1.2_searchBSTRecursive.template.js

/**
 * Template: Procurar um valor na BST (recursivo)
 * Quando usar: Quando queres uma implementação mais simples e legível,
 *              e a profundidade da árvore não é muito grande (para evitar stack overflow).
 * Notas:
 * - Muito útil para problemas em que a recursão simplifica a lógica.
 * - Pode consumir mais memória devido à pilha de chamadas.
 * Complexidade:
 * - Tempo O(h)
 * - Espaço O(h) devido à recursão.
 */

function searchBSTRecursive(root, val) {
  if (!root || root.val === val) return root;

  return val < root.val
    ? searchBSTRecursive(root.left, val)
    : searchBSTRecursive(root.right, val);
}

module.exports = searchBSTRecursive;
