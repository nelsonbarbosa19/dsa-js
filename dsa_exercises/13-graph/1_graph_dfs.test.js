/**
 * Descrição:
 * Dado um grafo representado por adjacency list e um nó inicial,
 * implementa DFS (Depth-First Search) e retorna a ordem dos nós visitados.
 *
 * Exemplo:
 *   Input:
 *     graph = {
 *       A: ["B", "C"],
 *       B: ["D"],
 *       C: ["E"],
 *       D: ["F"],
 *       E: [],
 *       F: []
 *     }
 *     start = "A"
 *   Output: ["A", "B", "D", "F", "C", "E"]
 */

function dfs(graph, start) {
  const visited = new Set();
  const res = [];

  function traverse(node) {
    if (visited.has(node)) return;

    visited.add(node);
    res.push(node);

    const neighbors = graph[node];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        traverse(neighbor);
      }
    }
  }

  traverse(start);

  return res;
}

module.exports = { dfs };

/* Testes Jest */
describe("DFS (Graph)", () => {
  test("exemplo clássico", () => {
    const graph = {
      A: ["B", "C"],
      B: ["D"],
      C: ["E"],
      D: ["F"],
      E: [],
      F: [],
    };
    expect(dfs(graph, "A")).toEqual(["A", "B", "D", "F", "C", "E"]);
  });

  test("grafo com apenas 1 nó", () => {
    const graph = { A: [] };
    expect(dfs(graph, "A")).toEqual(["A"]);
  });

  test("grafo desconectado (visita apenas componente ligada)", () => {
    const graph = {
      A: ["B"],
      B: [],
      C: ["D"],
      D: [],
    };
    expect(dfs(graph, "A")).toEqual(["A", "B"]);
  });

  test("grafo com ciclo", () => {
    const graph = {
      A: ["B"],
      B: ["C"],
      C: ["A"], // ciclo A -> B -> C -> A
    };
    expect(dfs(graph, "A")).toEqual(["A", "B", "C"]);
  });
});
