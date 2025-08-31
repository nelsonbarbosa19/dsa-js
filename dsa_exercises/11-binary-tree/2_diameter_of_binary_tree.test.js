/**
 * Descrição:
 * Dada a raiz de uma Binary Tree, calcula o diâmetro da árvore.
 * O diâmetro é o número de arestas no caminho mais longo entre dois nós.
 *
 * Exemplos:
 *   Input: [1,2,3,4,5]  (onde 2 tem filhos 4 e 5)
 *   diameterOfBinaryTree(root) => 3  (caminho 4-2-5-1-3 tem 4 nós, logo 3 arestas)
 *
 *   Input: [1] => 0
 *   Input: []  => 0
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function diameterOfBinaryTree(root) {
  if (!root) {
    return 0;
  }

  let maxDiameter = 0;

  function maxDepth(node) {
    if (!node) {
      return 0;
    }

    const left = maxDepth(node.left);
    const right = maxDepth(node.right);

    // o caminho mais longo que passa por 'node' tem (left + right) arestas
    maxDiameter = Math.max(maxDiameter, right + left);

    // profundidade deste nó (em nós) = 1 + max(profunda esquerda, direita)
    return Math.max(left, right) + 1;
  }

  maxDepth(root);

  return maxDiameter;
}

module.exports = { TreeNode, diameterOfBinaryTree };

/* Testes Jest */
describe("diameterOfBinaryTree", () => {
  test("exemplo clássico", () => {
    // Árvore:
    //       1
    //     /   \
    //    2     3
    //   / \
    //  4   5
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3)
    );
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  test("árvore degenerada (lista ligada) à esquerda", () => {
    // 1 - 2 - 3 - 4 (tudo à esquerda)
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4)))
    );
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  test("apenas raiz", () => {
    const root = new TreeNode(1);
    expect(diameterOfBinaryTree(root)).toBe(0);
  });

  test("árvore vazia", () => {
    expect(diameterOfBinaryTree(null)).toBe(0);
  });

  test("subárvore profunda num lado", () => {
    //        10
    //       /  \
    //      5    20
    //     /        \
    //    3          30
    //                 \
    //                 40
    const root = new TreeNode(
      10,
      new TreeNode(5, new TreeNode(3), null),
      new TreeNode(20, null, new TreeNode(30, null, new TreeNode(40)))
    );
    // Caminho mais longo: 3-5-10-20-30-40 => 6 nós => 5 arestas
    expect(diameterOfBinaryTree(root)).toBe(5);
  });
});
