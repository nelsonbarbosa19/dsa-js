// 11-binary-tree/10_pathSum.template.js

/**
 * Template: Path Sum (BT genérica)
 * Quando usar: Verificar se existe caminho da raiz até uma folha com soma == target.
 * Notas:
 * - DFS acumulando a soma; em folha compara com target.
 * - Short-circuit com OR para parar cedo.
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(h)
 */

function hasPathSum(root, targetSum) {
  function dfs(node, acc) {
    if (!node) {
      return false;
    }

    acc += node.val;

    if (!node.left && !node.right) {
      return acc === targetSum;
    }

    return dfs(node.left, acc) || dfs(node.right, acc);
  }

  return dfs(root, 0);
}
