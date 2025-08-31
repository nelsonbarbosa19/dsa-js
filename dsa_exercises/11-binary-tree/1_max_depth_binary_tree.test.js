/**
 * Descrição:
 * Dada a raiz de uma árvore binária, retorna a sua profundidade máxima.
 * A profundidade máxima é o número de nós no caminho mais longo da raiz até uma folha.
 *
 * Exemplos:
 *   Input: [3,9,20,null,null,15,7]
 *   Output: 3
 *
 *   Input: [1,null,2]
 *   Output: 2
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function maxDepth(root) {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function maxDepth_iterative_BFS(root) {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    depth++;
  }

  return depth;
}

module.exports = { TreeNode, maxDepth };

/* Testes Jest */
describe("maxDepth", () => {
  test("exemplo 1", () => {
    //     3
    //    / \
    //   9  20
    //      / \
    //     15  7
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    expect(maxDepth_iterative_BFS(root)).toBe(3);
  });

  test("exemplo 2", () => {
    // 1
    //  \
    //   2
    const root = new TreeNode(1, null, new TreeNode(2));
    expect(maxDepth(root)).toBe(2);
  });

  test("único nó", () => {
    const root = new TreeNode(42);
    expect(maxDepth(root)).toBe(1);
  });

  test("árvore vazia", () => {
    expect(maxDepth(null)).toBe(0);
  });
});
