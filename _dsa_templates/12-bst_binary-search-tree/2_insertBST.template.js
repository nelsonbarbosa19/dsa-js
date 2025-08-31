// 12-binary-search-tree/2_insertBST.template.js

/**
 * Template: Inserir valor na BST
 * Quando usar: Quando queres adicionar um valor mantendo a propriedade de BST.
 * Notas:
 * - A inserção é feita procurando o local correto (sempre numa folha null).
 * - Se valores duplicados não forem permitidos, verifica antes de inserir.
 * Complexidade:
 * - Tempo O(h)
 * - Espaço O(h) recursivo ou O(1) iterativo.
 */

function insertBST(root, val) {
  if (!root) return { val, left: null, right: null };

  if (val < root.val) {
    root.left = insertBST(root.left, val);
  } else if (val > root.val) {
    root.right = insertBST(root.right, val);
  }

  return root;
}
