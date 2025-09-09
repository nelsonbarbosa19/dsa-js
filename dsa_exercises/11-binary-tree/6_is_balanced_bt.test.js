/**
 * Descrição:
 * Dada a raiz de uma Binary Tree, determina se a árvore é
 * "height-balanced".
 *
 * Uma árvore é height-balanced se, para cada nó, a diferença
 * entre a altura da subárvore esquerda e direita for no máximo 1.
 *
 * Exemplos:
 *   Input: [3,9,20,null,null,15,7] => true
 *   Input: [1,2,2,3,3,null,null,4,4] => false
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isBalanced(root) {
  if (!root) return true;

  function check(node) {
    if (!node) return 0;

    const leftHeight = check(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = check(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  return check(root) !== -1;
}

module.exports = { TreeNode, isBalanced };

/* Testes Jest */
describe("isBalanced (Binary Tree)", () => {
  test("árvore balanceada", () => {
    // Árvore:
    //       3
    //      / \
    //     9   20
    //        /  \
    //       15   7
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    expect(isBalanced(root)).toBe(true);
  });

  test("árvore não balanceada", () => {
    // Árvore:
    //         1
    //        / \
    //       2   2
    //      / \
    //     3   3
    //    / \
    //   4   4
    const root = new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4), new TreeNode(4)),
        new TreeNode(3)
      ),
      new TreeNode(2)
    );
    expect(isBalanced(root)).toBe(false);
  });

  test("árvore vazia é balanceada", () => {
    expect(isBalanced(null)).toBe(true);
  });

  test("apenas raiz é balanceada", () => {
    const root = new TreeNode(1);
    expect(isBalanced(root)).toBe(true);
  });

  test("subárvore esquerda profunda", () => {
    // Árvore:
    //     1
    //    /
    //   2
    //  /
    // 3
    //  \
    //   4
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, null, new TreeNode(4)))
    );
    expect(isBalanced(root)).toBe(false);
  });
});
