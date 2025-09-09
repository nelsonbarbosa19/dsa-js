// 11-binary-tree/1_traversalDFS.template.js

/**
 * Template: Binary Tree DFS Traversals (Preorder, Inorder, Postorder)
 * Quando usar: Traversals são base de muitos problemas em Binary Trees.
 * Notas:
 * - Preorder: Root → Left → Right
 * - Inorder: Left → Root → Right
 * - Postorder: Left → Right → Root
 * - Podem ser implementados recursivamente ou iterativamente (com stack).
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(h) (altura da árvore)
 */

function inorderTraversal(root, result = []) {
  if (!root) return result;

  inorderTraversal(root.left, result);
  result.push(root.val);
  inorderTraversal(root.right, result);

  return result;
}

function inorderTraversal(root, result = []) {
  if (!root) return result;

  inorderTraversal(root.left, result);
  result.push(root.val);
  inorderTraversal(root.right, result);

  return result;
}

function postorderTraversal(root, result = []) {
  if (!root) return result;

  postorderTraversal(root.left, result);
  postorderTraversal(root.right, result);

  result.push(root.val);

  return result;
}
