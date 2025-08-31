// 13-graph/1_graph_dfs.template.js

/**
 * Template: Graph – Depth‑First Search (DFS)
 * Quando usar: Quando precisas de percorrer um grafo profundamente antes de passar para outros nós,
 *               útil para detecção de ciclos, componentes conectados ou backtracking.
 * Notas:
 * - Pode ser implementado recursivamente ou iterativamente com stack.
 * - Marca nós visitados para evitar ciclos.
 * Complexidade:
 * - Tempo: O(V + E)
 * - Espaço: O(V) (stack recursiva ou explícita)
 */

function graphDFS(startNode, getNeighbors, visited = new Set()) {
  if (visited.has(startNode)) return;

  // Processa o nó (ex.: registro, verificação de condição, etc.)
  visited.add(startNode);

  for (const neighbor of getNeighbors(startNode)) {
    if (!visited.has(neighbor)) {
      graphDFS(neighbor, getNeighbors, visited);
    }
  }

  // Retorna valor conforme o problema (ex.: visited, componentes, caminho, etc.)
  return visited;
}
