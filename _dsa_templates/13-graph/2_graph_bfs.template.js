// 13-graph/2_graph_bfs.template.js

/**
 * Template: Graph – Breadth-First Search (BFS)
 * Quando usar: Quando precisas de percorrer um grafo por níveis,
 *               como em problemas de caminho mínimo (unweighted), conectividade ou distância mínima em passos.
 * Notas:
 * - Usa uma fila (queue) para processar nós por ordem de nível.
 * - Marca nós como visitados para evitar ciclos.
 * Complexidade:
 * - Tempo: O(V + E)
 * - Espaço: O(V)
 */

function graphBFS(startNode, getNeighbors) {
  const visited = new Set();
  const queue = [startNode];

  visited.add(startNode);

  while (queue.length > 0) {
    const node = queue.shift();

    // Processa o nó (ex.: registro, verificação de condição, etc.)
    for (const neighbor of getNeighbors(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  // Retorna valor conforme o problema (ex.: visited, caminho, nível, etc.)
  return visited;
}
