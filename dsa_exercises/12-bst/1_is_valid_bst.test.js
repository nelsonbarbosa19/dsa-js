/**
 * Descrição:
 * Dada a raiz de uma árvore binária, verifica se ela é uma Binary Search Tree (BST).
 *
 * Uma BST é válida se:
 *  - Todos os nós da subárvore esquerda < nó atual.
 *  - Todos os nós da subárvore direita > nó atual.
 *  - Ambas as subárvores também são BSTs.
 *
 * Exemplos:
 *   Input: [2,1,3]
 *   Output: true
 *
 *   Input: [5,1,4,null,null,3,6]
 *   Output: false (porque 3 está na subárvore direita de 5, mas é < 5)
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isValidBST(root) {
  function traverse(node, leftMin, rightMax) {
    if (!node) {
      return true;
    }

    if (!(leftMin < node.val && node.val < rightMax)) {
      return false;
    }

    return (
      traverse(node.left, leftMin, node.val) &&
      traverse(node.right, node.val, rightMax)
    );
  }

  return traverse(root, -Infinity, Infinity);
}

module.exports = { TreeNode, isValidBST };

/* Testes Jest */
describe("isValidBST", () => {
  test("exemplo válido simples", () => {
    //     2
    //    / \
    //   1   3
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    expect(isValidBST(root)).toBe(true);
  });

  test("exemplo inválido", () => {
    //       5
    //      / \
    //     1   4
    //        / \
    //       3   6
    const root = new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(4, new TreeNode(3), new TreeNode(6))
    );
    expect(isValidBST(root)).toBe(false);
  });

  test("único nó é válido", () => {
    const root = new TreeNode(10);
    expect(isValidBST(root)).toBe(true);
  });

  test("subárvore esquerda inválida", () => {
    //     10
    //    /  \
    //   5   15
    //      /
    //     6   <-- inválido (6 < 10 mas está na direita de 10)
    const root = new TreeNode(
      10,
      new TreeNode(5),
      new TreeNode(15, new TreeNode(6), new TreeNode(20))
    );
    expect(isValidBST(root)).toBe(false);
  });

  test("árvore maior válida", () => {
    //        8
    //      /   \
    //     3    10
    //    / \     \
    //   1   6     14
    //      / \   /
    //     4   7 13
    const root = new TreeNode(
      8,
      new TreeNode(
        3,
        new TreeNode(1),
        new TreeNode(6, new TreeNode(4), new TreeNode(7))
      ),
      new TreeNode(10, null, new TreeNode(14, new TreeNode(13)))
    );
    expect(isValidBST(root)).toBe(true);
  });

  test("árvore vazia é válida", () => {
    expect(isValidBST(null)).toBe(true);
  });
});
