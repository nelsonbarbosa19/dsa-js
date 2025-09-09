// _dsa_templates/12-bst_binary-search-tree/7_lowestCommonAncestorBST.template.js

/**
 * Template: Lowest Common Ancestor (LCA) em BST
 * Quando usar: Para encontrar o ancestral comum mais baixo de dois nós p e q numa BST.
 * Notas:
 * - Usa a propriedade da BST:
 *   - Se p.val e q.val < node.val → LCA está na esquerda.
 *   - Se p.val e q.val > node.val → LCA está na direita.
 *   - Caso contrário, o node atual é o LCA.
 * - Funciona mesmo que p esteja acima de q (ou vice-versa).
 * Complexidade:
 * - Tempo: O(h) — h = altura da árvore
 * - Espaço: O(1) (iterativo) / O(h) (recursivo)
 */

function lowestCommonAncestorBST(root, p, q) {
  let node = root;
  const pv = p.val;
  const qv = q.val;

  while (node) {
    if (pv < node.val && qv < node.val) {
      node = node.left;
    } else if (pv > node.val && qv > node.val) {
      node = node.right;
    } else {
      // Divergiram ou um deles é o próprio node → este é o LCA
      return node; // se precisares só do valor: return node.val;
    }
  }

  return null; // não encontrado (árvore vazia ou entradas inválidas)
}
