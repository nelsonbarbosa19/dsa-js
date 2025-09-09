// 12-bst/4_findMinMaxBST.template.js

/**
 * Template: Find Min / Max em BST
 * Quando usar: Precisar do menor ou maior valor numa BST.
 * Notas:
 * - Min: ir sempre para a esquerda até não haver mais.
 * - Max: ir sempre para a direita até não haver mais.
 * - Base de várias operações (ex.: delete em BST).
 * Complexidade:
 * - Tempo: O(h) (altura da árvore, O(log n) se balanceada, O(n) se degenerada)
 * - Espaço: O(1)
 */

function findMinBST(root) {
  if (!root) return null;

  let node = root;

  while (node.left) {
    node = node.left;
  }

  return node;
}

function findMaxBST(root) {
  if (!root) return null;

  let node = root;

  while (node.right) {
    node = node.right;
  }

  return node;
}
