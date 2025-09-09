// 11-binary-tree/8_diameterOfBinaryTree.template.js

/**
 * Template: Diameter of Binary Tree (BT genérica)
 * Quando usar: Quando pedirem o nº de arestas no caminho mais longo entre quaisquer dois nós.
 * Notas:
 * - DFS pós-ordem: para cada nó, combina as profundidades da esquerda e direita.
 * - Atualiza um máximo global com leftDepth + rightDepth (em ARESTAS).
 * - Retorna ao pai a profundidade do nó atual: 1 + max(leftDepth, rightDepth).
 * Complexidade:
 * - Tempo: O(n) (visita cada nó uma vez)
 * - Espaço: O(h) (altura da árvore, stack recursiva)
 */

function diameterOfBinaryTree(root) {
  let maxDia = 0;

  function depth(node) {
    if (!node) {
      return 0;
    }

    const L = depth(node.left);
    const R = depth(node.right);

    maxDia = Math.max(maxDia, L + R); // nº de arestas que passa por 'node'

    return 1 + Math.max(L, R); // profundidade (em nós) para o pai
  }

  depth(root);

  return maxDia;
}
