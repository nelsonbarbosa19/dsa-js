// 11-binary-tree/7_rootToLeafPaths.template.js

/**
 * Template: Root → Leaf Paths (todas as paths da raiz até às folhas)
 * Quando usar: Quando precisas listar/inspecionar todos os caminhos da raiz até cada folha,
 *              muitas vezes para somatórios, validações, impressões ou debugging.
 * Notas:
 * - Define-se folha como um nó sem filhos (left === null e right === null).
 * - Padrão clássico de DFS (pré-ordem) com backtracking:
 *   - adiciona o valor ao caminho atual,
 *   - se for folha, regista o caminho,
 *   - recua removendo o último valor (backtrack).
 * - Podes devolver:
 *   - Array de arrays de números (ex.: [[5,4,11,2], [5,8,4,1]]), ou
 *   - Array de strings (ex.: ["5->4->11->2", "5->8->4->1"]).
 *   Mantemos ambos esboçados para facilidade de uso.
 * Complexidade:
 * - Tempo: O(n) para visitar todos os nós + O(total_len_paths) para copiar paths
 * - Espaço: O(h) de stack (h = altura da árvore) + espaço para armazenar as paths
 */

function rootToLeafPaths(root) {
  const paths = [];

  function traverse(node, path) {
    if (!node) {
      return;
    }

    path.push(node.val);

    if (!node.left && !node.right) {
      // --- Variante A: guardar como array de números ---
      paths.push([...path]);

      // --- Variante B: guardar como string "a->b->c" ---
      // paths.push(path.join("->"))
    } else {
      traverse(node.left, path);
      traverse(node.right, path);
    }

    path.pop();
  }

  traverse(root, []);

  return paths;
}

/* ==============================
 * Variante Iterativa (opcional)
 * Stack de pares (node, pathAtualComoArray)
 * Útil se quiseres evitar recursão.
 * ============================== */
// function rootToLeafPathsIterative(root) {
//   if (!root) return [];
//   const res = [];
//   const stack = [[root, [root.val]]];

//   while (stack.length) {
//     const [node, path] = stack.pop();

//     if (!node.left && !node.right) {
//       // --- Variante A: array ---
//       res.push(path.slice());
//       // --- Variante B: string ---
//       // res.push(path.join("->"));
//     }

//     if (node.right) stack.push([node.right, [...path, node.right.val]]);
//     if (node.left)  stack.push([node.left,  [...path, node.left.val]]);
//   }

//   return res;
// }

module.exports = { rootToLeafPaths /*, rootToLeafPathsIterative */ };
