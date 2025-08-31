// 06-binary-tree/1.1_preorderTraversal.template.js

/**
 * Template: Preorder Traversal (Root → Left → Right)
 * Quando usar: Quando precisa processar o nó antes dos filhos.
 * Complexidade:
 *  - Tempo: O(n)
 *  - Espaço: O(h) recursivo
 */

function preorderTraversal(root, result = []) {
  if (!root) return result;

  result.push(root.val);

  preorderTraversal(root.left, result);
  preorderTraversal(root.right, result);

  return result;
}
