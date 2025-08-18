/**
 * Estrutura básica de um nó de árvore binária
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/**
 * 📝 Exercício 3: Inverter uma árvore binária (Mirror Tree)
 * Troca recursivamente os filhos esquerdo e direito de cada nó.
 * Estratégia: DFS recursivo, trocando left/right.
 * Complexidade: O(n) tempo, O(h) espaço.
 */
function invertTree(root) {
  if (!root) return null;
}

test("invertTree - inverter árvore binária", () => {
  const root = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
  );
  const inverted = invertTree(root);
  expect(levelOrder(inverted)).toEqual([[4], [7, 2], [9, 6], [3, 1]]);
});
