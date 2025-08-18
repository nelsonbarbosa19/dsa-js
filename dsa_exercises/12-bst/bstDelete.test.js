// 12-bst/bstDelete.test.js

/**
 * 📝 Exercício: Remover um valor de uma Binary Search Tree (BST)
 * Ao remover:
 *  - Nó folha: simplesmente remove.
 *  - Nó com 1 filho: substitui pelo filho.
 *  - Nó com 2 filhos: substitui pelo menor valor da subárvore direita.
 * Estratégia: Recursiva, ajustando apontadores.
 * Complexidade: O(h) tempo, O(h) espaço recursivo (h = altura da árvore).
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function deleteNode(root, key) {}

test("deleteNode - remover valor folha", () => {
  const root = new TreeNode(5, new TreeNode(3), new TreeNode(6));
  const newRoot = deleteNode(root, 3);
  expect(newRoot.left).toBeNull();
});

test("deleteNode - remover valor com dois filhos", () => {
  const root = new TreeNode(
    5,
    new TreeNode(3, new TreeNode(2), new TreeNode(4)),
    new TreeNode(6, null, new TreeNode(7))
  );
  const newRoot = deleteNode(root, 3);
  expect(newRoot.left.val).toBe(4);
});
