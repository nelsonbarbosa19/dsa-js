// 11-binary-tree/11_lowestCommonAncestorBT.template.js

/**
 * Template: Lowest Common Ancestor (LCA) em Binary Tree GENÉRICA
 * Quando usar: Encontrar o ancestral comum mais baixo de p e q sem propriedade de BST.
 * Notas:
 * - DFS: retorna o próprio nó quando encontra p ou q.
 * - Combinação:
 *    - Se esquerda e direita retornarem não-nulo → o nó atual é o LCA.
 *    - Caso contrário, propaga o lado não-nulo (p ou q encontrado abaixo).
 * - Não usa ordenação (diferente de LCA em BST).
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(h)
 */

function lowestCommonAncestorBT(root, p, q) {
  function dfs(node) {
    if (!node) {
      return null;
    }

    if (node === p || node === q) return node;

    const L = dfs(node.left);
    const R = dfs(node.right);

    if (L && R) return node; // p e q em lados diferentes

    return L || R; // propaga o que encontrou (ou null)
  }

  return dfs(root);
}
