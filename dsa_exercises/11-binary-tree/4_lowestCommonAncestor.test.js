/**
 * Descrição:
 * Dada a raiz de uma Binary Search Tree (BST) e dois nós p e q,
 * retorna o Lowest Common Ancestor (LCA) dos dois nós.
 *
 * O LCA é definido como o nó mais baixo da árvore que tem p e q
 * como descendentes (um nó pode ser descendente de si mesmo).
 *
 * Exemplos:
 *   Input: root = [6,2,8,0,4,7,9,null,null,3,5], p=2, q=8
 *   lowestCommonAncestor_iterative(root, p, q) => 6
 *
 *   Input: root = [6,2,8,0,4,7,9,null,null,3,5], p=2, q=4
 *   lowestCommonAncestor_iterative(root, p, q) => 2
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function lowestCommonAncestor_iterative(root, p, q) {
  // De forma iterativa, melhor em termos de espaço: O(1)
  let node = root;
  const minVal = Math.min(p.val, q.val);
  const maxVal = Math.max(p.val, q.val);

  while (node) {
    if (node.val > maxVal) {
      node = node.left;
    } else if (node.val < minVal) {
      node = node.right;
    } else {
      return node;
    }
  }

  return null;
}

function lowestCommonAncestor_recursive(root, p, q) {
  // De forma recursiva, pior em termos de espaço: O(h)
  const minVal = Math.min(p.val, q.val);
  const maxVal = Math.max(p.val, q.val);

  function traverse(node, p, q) {
    if (!node) return null;

    if (node.val > maxVal) {
      return traverse(node.left, p, q);
    } else if (node.val < minVal) {
      return traverse(node.right, p, q);
    }

    return node;
  }

  return traverse(root, p, q);
}

/* Testes Jest */
describe("lowestCommonAncestor_iterative", () => {
  test("exemplo 1", () => {
    //        6
    //      /   \
    //     2     8
    //    / \   / \
    //   0   4 7   9
    //      / \
    //     3   5
    const root = new TreeNode(
      6,
      new TreeNode(
        2,
        new TreeNode(0),
        new TreeNode(4, new TreeNode(3), new TreeNode(5))
      ),
      new TreeNode(8, new TreeNode(7), new TreeNode(9))
    );
    const p = root.left; // 2
    const q = root.right; // 8
    expect(lowestCommonAncestor_recursive(root, p, q).val).toBe(6);
  });

  test("exemplo 2", () => {
    // Mesmo root do exemplo anterior
    const root = new TreeNode(
      6,
      new TreeNode(
        2,
        new TreeNode(0),
        new TreeNode(4, new TreeNode(3), new TreeNode(5))
      ),
      new TreeNode(8, new TreeNode(7), new TreeNode(9))
    );
    const p = root.left; // 2
    const q = root.left.right; // 4
    expect(lowestCommonAncestor_recursive(root, p, q).val).toBe(2);
  });

  test("quando p é o root", () => {
    const root = new TreeNode(2, new TreeNode(1));
    const p = root; // 2
    const q = root.left; // 1
    expect(lowestCommonAncestor_recursive(root, p, q).val).toBe(2);
  });
});
