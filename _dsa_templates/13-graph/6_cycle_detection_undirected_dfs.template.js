// 13-graph/7_cycle_detection_undirected_dfs.template.js

/**
 * Template: Graph – Cycle Detection (Undirected) via DFS
 * Quando usar: Quando precisas verificar se um grafo NÃO DIRECIONADO contém ciclo.
 * Notas:
 * - Usa DFS com rastreamento do "parent" para distinguir arestas de volta (ciclo)
 *   de arestas para o nó anterior (parent), que NÃO contam como ciclo.
 * - O grafo deve ser tratado como NÃO DIRECIONADO (arestas simétricas).
 * - Funciona em grafos possivelmente desconexos (varre todos os vértices).
 * Complexidade:
 * - Tempo: O(V + E)
 * - Espaço: O(V) (visited + stack recursiva)
 */

/**
 * @param {Iterable<any>} vertices - coleção (array/set) com todos os vértices do grafo
 * @param {(v:any)=>Iterable<any>} getNeighbors - função que retorna os vizinhos de v
 * @returns {boolean} - true se existir pelo menos um ciclo, caso contrário false
 */
function hasCycleUndirected(vertices, getNeighbors) {
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    for (const neighbor of getNeighbors(node)) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true; // ciclo encontrado mais abaixo
      } else if (neighbor !== parent) {
        // Vizinho já visitado que não é o pai -> aresta de volta => ciclo
        return true;
      }
    }

    return false;
  }

  // Pode haver múltiplos componentes; verifica todos
  for (const v of vertices) {
    if (!visited.has(v)) {
      if (dfs(v, null)) return true;
    }
  }

  return false;
}
