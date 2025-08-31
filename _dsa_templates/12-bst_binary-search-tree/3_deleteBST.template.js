// 12-binary-search-tree/3_deleteBST.template.js

/**
 * Template: Remover valor na BST
 * Quando usar: Quando precisas remover um valor e manter a BST válida.
 * Notas:
 * - Três casos:
 *    1. Nó sem filhos → remover diretamente.
 *    2. Nó com um filho → substituir pelo filho.
 *    3. Nó com dois filhos → substituir pelo menor valor da subárvore direita (inorder successor).
 * Complexidade:
 * - Tempo O(h)
 * - Espaço O(h) recursivo ou O(1) iterativo.
 */

function deleteBST(root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteBST(root.left, key);
  } else if (key > root.val) {
    root.right = deleteBST(root.right, key);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let minNode = root.right;

    while (minNode.left) {
      minNode = minNode.left;
    }

    root.val = minNode.val;

    root.right = deleteBST(root.right, minNode.val);
  }

  return root;
}
