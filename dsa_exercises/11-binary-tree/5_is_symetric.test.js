/**
 * Descrição:
 * Dada a raiz de uma Binary Tree, verifica se a árvore é simétrica em torno do seu centro.
 *
 * Exemplos:
 *   Input: [1,2,2,3,4,4,3] => true
 *   Input: [1,2,2,null,3,null,3] => false
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isSymmetric(root) {
  if (!root) return true;

  function traverse(l, r) {
    if (!l && !r) {
      return true;
    }

    if (!l || !r) {
      return false;
    }

    if (l.val !== r.val) {
      return false;
    }

    return traverse(l.left, r.right) && traverse(l.right, r.left);
  }

  return traverse(root.left, root.right);
}

module.exports = { TreeNode, isSymmetric };

/* Testes Jest */
describe("isSymmetric (Binary Tree)", () => {
  test("exemplo clássico simétrico", () => {
    // Árvore:
    //        1
    //      /   \
    //     2     2
    //    / \   / \
    //   3   4 4   3
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    );
    expect(isSymmetric(root)).toBe(true);
  });

  test("exemplo clássico não simétrico", () => {
    // Árvore:
    //       1
    //      / \
    //     2   2
    //      \    \
    //       3    3
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3))
    );
    expect(isSymmetric(root)).toBe(false);
  });

  test("árvore vazia é simétrica", () => {
    expect(isSymmetric(null)).toBe(true);
  });

  test("apenas raiz", () => {
    const root = new TreeNode(1);
    expect(isSymmetric(root)).toBe(true);
  });

  test("subárvore esquerda e direita diferentes", () => {
    // Árvore:
    //       1
    //      / \
    //     2   2
    //    /     \
    //   3       4
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(4))
    );
    expect(isSymmetric(root)).toBe(false);
  });
});
