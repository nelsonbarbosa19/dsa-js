// _dsa_templates/12-bst_binary-search-tree/6_isValidBST_bounds.template.js

/**
 * Template: Validar BST (método dos limites: min/max)
 * Quando usar: Para verificar se uma árvore cumpre a propriedade global de BST.
 * Notas:
 * - Em cada nó, o valor deve estar estritamente entre (min, max).
 * - Na recursão: subárvore esquerda atualiza max = node.val; direita atualiza min = node.val.
 * - Evita erros comuns de validar só contra filhos imediatos.
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(h) — h = altura da árvore (stack recursiva)
 */

function isValidBSTBounds(root) {
  function traverse(node, leftMin, rightMax) {
    if (!node) {
      return true;
    }

    if (!(leftMin < node.val && node.val < rightMax)) {
      return false;
    }

    return (
      traverse(node.left, leftMin, node.val) &&
      traverse(node.right, node.val, rightMax)
    );
  }

  return traverse(root, -Infinity, Infinity);
}
