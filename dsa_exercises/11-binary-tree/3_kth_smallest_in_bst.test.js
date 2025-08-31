/**
 * Descrição:
 * Dada a raiz de uma Binary Search Tree (BST) e um número inteiro k,
 * retorna o k-ésimo menor elemento da BST.
 *
 * Exemplos:
 *   Input: root = [3,1,4,null,2], k = 1
 *   kthSmallest(root, k) => 1
 *
 *   Input: root = [5,3,6,2,4,null,null,1], k = 3
 *   kthSmallest(root, k) => 3
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function kthSmallest(root, k) {
  let kthSmallest = null;
  let count = 0;

  function traverse(node) {
    if (!node) {
      return false;
    }

    if (traverse(node.left)) {
      return true;
    }

    count++;

    if (count === k) {
      kthSmallest = node.val;
      return true;
    }

    return traverse(node.right);
  }

  traverse(root);

  return kthSmallest;
}

module.exports = { TreeNode, kthSmallest };

/* Testes Jest */
describe("kthSmallest", () => {
  test("exemplo 1", () => {
    //    3
    //   / \
    //  1   4
    //   \
    //    2
    const root = new TreeNode(
      3,
      new TreeNode(1, null, new TreeNode(2)),
      new TreeNode(4)
    );
    expect(kthSmallest(root, 1)).toBe(1);
  });

  test("exemplo 2", () => {
    //        7
    //       / \
    //      3   8
    //     / \
    //    2   4
    //   /   / \
    //  1   5   6
    const root = new TreeNode(
      7,
      new TreeNode(
        3,
        new TreeNode(2, new TreeNode(1)),
        new TreeNode(4, new TreeNode(5), new TreeNode(6))
      ),
      new TreeNode(8)
    );
    expect(kthSmallest(root, 7)).toBe(7);
  });

  test("exemplo 3", () => {
    //     1
    //      \
    //       2
    //        \
    //         3
    //          \
    //           4
    const root = new TreeNode(
      1,
      null,
      new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))
    );
    expect(kthSmallest(root, 4)).toBe(4);
  });

  test("árvore com único nó", () => {
    const root = new TreeNode(10);
    expect(kthSmallest(root, 1)).toBe(10);
  });
});
