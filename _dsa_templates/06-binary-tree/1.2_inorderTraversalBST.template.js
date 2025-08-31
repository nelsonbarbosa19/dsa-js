// 06-binary-tree/1.2_inorderTraversalBST.template.js

/**
 * Template: Travessia in-order numa BST
 * Quando usar: Para obter os valores da BST em ordem crescente.
 * Complexidade:
 *  - Tempo: O(n)
 *  - Espaço: O(h) devido à recursão
 */

function inorderTraversalBST(root, result = []) {
  if (!root) return result;

  inorderTraversalBST(root.left, result);
  result.push(root.val);
  inorderTraversalBST(root.right, result);

  return result;
}
