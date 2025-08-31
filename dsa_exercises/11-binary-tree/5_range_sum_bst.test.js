/**
 * Descrição:
 * Dada a raiz de uma Binary Search Tree (BST), e dois inteiros low e high,
 * retorna a soma de todos os valores dos nós com low <= val <= high.
 *
 * Exemplos:
 *   Input: root = [10,5,15,3,7,null,18], low=7, high=15
 *   rangeSumBST(root, 7, 15) => 32 (7 + 10 + 15)
 *
 *   Input: root = [10,5,15,3,7,13,18,1,null,6], low=6, high=10
 *   rangeSumBST(root, 6, 10) => 23 (6 + 7 + 10)
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Solução com podas.
function rangeSumBST(root, low, high) {
  if (!root) return 0;

  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }

  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }

  return (
    root.val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
}

module.exports = { TreeNode, rangeSumBST };

/* Testes Jest */
describe("rangeSumBST", () => {
  test("falha: soma nó > high (sem poda e sem verificação <= high)", () => {
    //      10
    //     /  \
    //    6    15
    //     \
    //      8
    //
    // Intervalo [5, 7] → soma correta: apenas 6
    // A tua implementação atual vai somar 6 e, depois, 8 (indevido) → 14

    const root = new TreeNode(
      10,
      new TreeNode(6, null, new TreeNode(8)),
      new TreeNode(15)
    );

    expect(rangeSumBST(root, 5, 7)).toBe(6);
  });

  test("exemplo 1", () => {
    //       10
    //      /  \
    //     5    15
    //    / \     \
    //   3   7     18
    const root = new TreeNode(
      10,
      new TreeNode(5, new TreeNode(3), new TreeNode(7)),
      new TreeNode(15, null, new TreeNode(18))
    );
    expect(rangeSumBST(root, 7, 15)).toBe(32);
  });

  test("exemplo 2", () => {
    //          10
    //        /    \
    //       5      15
    //      / \    /  \
    //     3   7  13  18
    //    /   /
    //   1   6
    const root = new TreeNode(
      10,
      new TreeNode(
        5,
        new TreeNode(3, new TreeNode(1)),
        new TreeNode(7, new TreeNode(6))
      ),
      new TreeNode(15, new TreeNode(13), new TreeNode(18))
    );
    expect(rangeSumBST(root, 6, 10)).toBe(23);
  });

  test("intervalo cobre todos os nós", () => {
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    expect(rangeSumBST(root, 1, 3)).toBe(6);
  });

  test("nenhum valor dentro do intervalo", () => {
    const root = new TreeNode(4, new TreeNode(2), new TreeNode(6));
    expect(rangeSumBST(root, 7, 10)).toBe(0);
  });

  test("árvore vazia", () => {
    expect(rangeSumBST(null, 1, 10)).toBe(0);
  });
});
