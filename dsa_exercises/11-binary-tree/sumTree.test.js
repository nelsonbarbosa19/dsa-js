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
 * 📝 Exercício 1: Soma de todos os valores da árvore (DFS Recursivo)
 * Dado o nó raiz de uma árvore binária, retorna a soma de todos os valores.
 * Estratégia: visitar cada nó usando Depth-First Search (pré-ordem).
 * Complexidade: O(n) tempo, O(h) espaço (h = altura da árvore).
 */
function sumTree(root) {
  if (!root) {
    return 0;
  }

  let sum = root.val;

  if (root.left) sum += sumTree(root.left, root.left.val);
  if (root.right) sum += sumTree(root.right, root.right.val);

  return sum;
}

test("sumTree - soma de todos os valores", () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(sumTree(root)).toBe(6);
});
