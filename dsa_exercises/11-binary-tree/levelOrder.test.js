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
 * 📝 Exercício 2: Percurso por níveis (BFS Iterativo)
 * Retorna uma lista de listas, onde cada sublista contém os valores de um nível da árvore.
 * Estratégia: usar uma fila (queue) para processar nós nível a nível.
 * Complexidade: O(n) tempo, O(n) espaço.
 */
function levelOrder(root) {
  if (!root) {
    return null;
  }

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

test("levelOrder - BFS por níveis", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
  );
  expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5]]);
});
