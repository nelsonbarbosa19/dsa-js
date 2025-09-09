// 11-binary-tree/9_invertBinaryTree.template.js

/**
 * Template: Invert Binary Tree (espelhar a árvore)
 * Quando usar: Quando pedirem para trocar esquerda↔direita recursivamente.
 * Notas:
 * - Recursivo simples: troca filhos e propaga.
 * - Variante iterativa com queue/stack também é comum.
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(h) recursivo (ou O(w) com BFS iterativo)
 */

function invertTree(root) {
  if (!root) return root;

  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;

  return root;
}

// Variante iterativa (BFS)
function invertTree_iterative(root) {
  if (!root) return root;

  const q = [root];

  while (q.length) {
    const node = q.shift();

    [node.left, node.right] = [node.right, node.left];

    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }

  return root;
}
