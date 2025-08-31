/**
 * Descrição:
 * Dada a raiz de uma Binary Tree e um inteiro targetSum, retorna true se existir
 * um caminho da raiz até uma folha tal que a soma dos valores dos nós ao longo
 * desse caminho seja exatamente targetSum.
 *
 * Nota: Uma folha é um nó sem filhos.
 *
 * Exemplos:
 *   Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 *   Output: true  (5 -> 4 -> 11 -> 2)
 *
 *   Input: root = [1,2,3], targetSum = 5
 *   Output: false
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function hasPathSum(root, targetSum) {
  function traverse(node, sum) {
    if (!node) {
      return false;
    }

    sum += node.val;

    if (!node.left && !node.right) {
      return targetSum === sum;
    }

    return traverse(node.left, sum) || traverse(node.right, sum);
  }

  return traverse(root, 0);
}

module.exports = { TreeNode, hasPathSum };

/* Testes Jest */
describe("hasPathSum", () => {
  test("exemplo clássico com caminho válido", () => {
    //           5
    //         /   \
    //        4     8
    //       /     / \
    //     11     13  4
    //    /  \         \
    //   7    2         1
    const root = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
    );
    expect(hasPathSum(root, 22)).toBe(true); // 5->4->11->2
  });

  test("sem caminho que some ao target", () => {
    //   1
    //  / \
    // 2   3
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(hasPathSum(root, 5)).toBe(false);
  });

  test("árvore com um único nó igual ao target", () => {
    const root = new TreeNode(7);
    expect(hasPathSum(root, 7)).toBe(true);
  });

  test("árvore com um único nó diferente do target", () => {
    const root = new TreeNode(7);
    expect(hasPathSum(root, 8)).toBe(false);
  });

  test("inclui números negativos", () => {
    //      -2
    //        \
    //        -3
    const root = new TreeNode(-2, null, new TreeNode(-3));
    expect(hasPathSum(root, -5)).toBe(true); // -2 -> -3
  });

  test("árvore vazia", () => {
    expect(hasPathSum(null, 0)).toBe(false);
  });
});
