// 06-binary-tree/1.3_postorderTraversal.template.js

/**
 * Template: Postorder Traversal (Left → Right → Root)
 * Quando usar: Quando precisa processar filhos antes do nó.
 * Complexidade:
 *  - Tempo: O(n)
 *  - Espaço: O(h)
 */

function postorderTraversal(root, result = []) {
  if (!root) return result;

  postorderTraversal(root.left, result);
  postorderTraversal(root.right, result);

  result.push(root.val);

  return result;
}

module.exports = postorderTraversal;
