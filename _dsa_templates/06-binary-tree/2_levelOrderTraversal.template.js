// 06-binary-tree/2_levelOrderTraversal.template.js

/**
 * Template: BFS (Level Order Traversal)
 * Quando usar: Quando precisa visitar nível a nível.
 * Complexidade:
 *  - Tempo: O(n)
 *  - Espaço: O(n) para a fila
 */

function levelOrderTraversal(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}

module.exports = levelOrderTraversal;
