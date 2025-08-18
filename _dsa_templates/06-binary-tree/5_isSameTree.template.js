// 06-binary-tree/4_isSameTree.template.js

/**
 * Template: Verificar se duas árvores são iguais
 * Quando usar: Comparar estrutura e valores.
 * Complexidade:
 *  - Tempo: O(n)
 *  - Espaço: O(h)
 */

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

module.exports = isSameTree;
