// _dsa_templates/12-bst_binary-search-tree/6_kthSmallestBST_inorder.template.js

/**
 * Template: k-th Smallest em BST (in-order)
 * Quando usar: Para obter o k-ésimo menor elemento numa BST.
 * Notas:
 * - In-order em BST visita nós em ordem crescente.
 * - Versão iterativa com stack evita profundidade recursiva elevada.
 * - Retorna o valor do nó; adapta se precisares do próprio nó.
 * Complexidade:
 * - Tempo: O(h + k) no pior caso O(n)
 * - Espaço: O(h) — stack da travessia
 */

function kthSmallestBST(root, k) {
  const stack = [];
  let curr = root;
  let count = k;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    count--;

    if (count === 0) {
      // se precisares do nó: return curr;
      return curr.val;
    }

    curr = curr.right;
  }

  // k inválido (maior que número de nós)
  return null;
}
