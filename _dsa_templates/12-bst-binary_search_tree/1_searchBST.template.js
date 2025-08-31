// _dsa_templates/12-bst_binary-search-tree/searchBST.template.js

/**
 * Template: Procurar num Binary Search Tree (BST)
 * Quando usar: Para verificar se um valor existe na BST e devolver o nó correspondente.
 * Notas:
 *   - Iterativa → preferida em produção (menos risco de stack overflow, O(1) espaço).
 *   - Recursiva → mais concisa e legível, mas usa stack da recursão (O(h) espaço).
 * Complexidade:
 * - Tempo: O(h), onde h = altura da árvore
 * - Espaço: - Iterativa: O(1) - Recursiva: O(h)
 */

/* Versão Iterativa */
function searchBSTIterative(root, val) {
  let node = root;

  while (node) {
    if (node.val === val) {
      return node;
    }

    if (val < node.val) {
      node = node.left;
    } else {
      node = node.right;
    }
  }

  return null;
}

/* Versão Recursiva */
function searchBSTRecursive(root, val) {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBSTRecursive(root.left, val);
  }

  return searchBSTRecursive(root.right, val);
}
