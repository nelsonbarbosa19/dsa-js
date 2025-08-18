// 06-binary-tree/3_maxDepth.template.js

/**
 * Template: Altura (profundidade máxima) da árvore
 * Quando usar: Para medir altura ou validar balanceamento.
 * Complexidade:
 *  - Tempo: O(n)
 *  - Espaço: O(h)
 */

function maxDepth(root) {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

module.exports = maxDepth;
