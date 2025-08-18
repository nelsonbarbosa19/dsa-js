// 12-bst/bstSearch.test.js

/**
 * 📝 Exercício: Procurar um valor numa Binary Search Tree (BST)
 * Dada a raiz de uma BST e um valor alvo, retorna o nó correspondente ou null.
 * Estratégia: Comparar o valor alvo com o nó atual e avançar à esquerda ou direita.
 * Complexidade: O(h) tempo, O(1) espaço iterativo (h = altura da árvore).
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function searchBST(root, val) {
  while (root !== null && root.val !== val) {
    if (val < root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return root;
}

function searchBST_recursive(root, target) {
  if (root === null || root.val === target) {
    return root;
  }
  if (target < root.val) {
    return searchBST(root.left, target);
  } else {
    return searchBST(root.right, target);
  }
}

test("searchBST - encontrar valor existente", () => {
  const root = new TreeNode(4, new TreeNode(2), new TreeNode(7));
  expect(searchBST(root, 2)?.val).toBe(2);
});

test("searchBST - valor inexistente retorna null", () => {
  const root = new TreeNode(4, new TreeNode(2), new TreeNode(7));
  expect(searchBST(root, 5)).toBeNull();
});

test("searchBST_recursive - encontrar valor existente", () => {
  const root = new TreeNode(4, new TreeNode(2), new TreeNode(7));
  expect(searchBST_recursive(root, 2)?.val).toBe(2);
});

test("searchBST_recursive - valor inexistente retorna null", () => {
  const root = new TreeNode(4, new TreeNode(2), new TreeNode(7));
  expect(searchBST_recursive(root, 5)).toBeNull();
});
