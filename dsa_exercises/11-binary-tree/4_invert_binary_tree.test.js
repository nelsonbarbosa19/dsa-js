/**
 * Descrição:
 * Dada a raiz de uma Binary Tree, inverte a árvore e retorna a sua raiz.
 * (Ou seja, troca recursivamente os filhos esquerdo e direito de todos os nós).
 *
 * Exemplos:
 *   Input:  [4,2,7,1,3,6,9]
 *   Output: [4,7,2,9,6,3,1]
 *
 *   Input: [2,1,3]
 *   Output: [2,3,1]
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function invertTree(root) {
  if (!root) return root;

  function invert(node) {
    if (!node) return;

    const tempNode = node.right;
    node.right = node.left;
    node.left = tempNode;

    invert(node.left);
    invert(node.right);
  }

  invert(root);

  return root;
}

function invertTree_iterative_bfs(root) {
  if (!root) return root;

  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    const tempNode = node.right;
    node.right = node.left;
    node.left = tempNode;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
}

function invertTree_iterative_dfs(root) {
  if (!root) return root;

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    const tempNode = node.right;
    node.right = node.left;
    node.left = tempNode;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;
}

// let node = root;

// while (node) {
//   const tempNode = node.right;
//   node.right = node.left;
//   node.left = tempNode;

//   if (node.left) node = left;
//   else if (node.right) node = right;
// }

module.exports = { TreeNode, invertTree };

/* Testes Jest */
describe("invertTree", () => {
  test("exemplo 1", () => {
    //        4
    //      /   \
    //     2     7
    //    / \   / \
    //   1   3 6   9
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7, new TreeNode(6), new TreeNode(9))
    );
    const inverted = invertTree_iterative_bfs(root);

    // Espera-se:
    //        4
    //      /   \
    //     7     2
    //    / \   / \
    //   9   6 3   1
    expect(inverted.left.val).toBe(7);
    expect(inverted.right.val).toBe(2);
    expect(inverted.left.left.val).toBe(9);
    expect(inverted.left.right.val).toBe(6);
    expect(inverted.right.left.val).toBe(3);
    expect(inverted.right.right.val).toBe(1);
  });

  test("exemplo 2", () => {
    //    2
    //   / \
    //  1   3
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const inverted = invertTree(root);

    // Espera-se:
    //    2
    //   / \
    //  3   1
    expect(inverted.left.val).toBe(3);
    expect(inverted.right.val).toBe(1);
  });

  test("árvore com único nó", () => {
    const root = new TreeNode(42);
    const inverted = invertTree(root);
    expect(inverted.val).toBe(42);
    expect(inverted.left).toBeNull();
    expect(inverted.right).toBeNull();
  });

  test("árvore vazia", () => {
    expect(invertTree(null)).toBeNull();
  });
});
