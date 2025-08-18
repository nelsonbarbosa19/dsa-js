// 12-bst/bstInsert.test.js

/**
 * 📝 Exercício: Inserir um valor numa Binary Search Tree (BST)
 * Dada a raiz de uma BST e um valor, insere-o respeitando a propriedade da BST.
 * Estratégia: Percorrer até encontrar um local vazio e inserir o novo nó.
 * Complexidade: O(h) tempo, O(1) espaço iterativo (h = altura da árvore).
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function insertIntoBST(root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  if (val < root.val) root.left = insertIntoBST(root.left, val);
  else if (val > root.val) root.right = insertIntoBST(root.right, val);

  return root;
}

test("insertIntoBST - inserir novo valor", () => {
  const root = new TreeNode(4, new TreeNode(2), new TreeNode(7));
  insertIntoBST(root, 5);
  expect(root.right.left.val).toBe(5);
});
