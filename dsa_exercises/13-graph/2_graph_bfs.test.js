/**
 * Descrição:
 * Dado um grafo representado por adjacency list e um nó inicial,
 * implementa BFS (Breadth-First Search) e retorna a ordem dos nós visitados.
 *
 * Exemplo:
 *   Input:
 *     graph = {
 *       A: ["B", "C"],
 *       B: ["D", "E"],
 *       C: ["F"],
 *       D: [],
 *       E: [],
 *       F: []
 *     }
 *     start = "A"
 *   Output: ["A", "B", "C", "D", "E", "F"]
 */

function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const res = [start];

  visited.add(start);

  while (queue.length) {
    const node = queue.shift();

    const neighbors = graph[node];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        res.push(neighbor);
      }
    }
  }

  return res;
}

module.exports = { bfs };

/* Testes Jest */
describe("BFS (Graph)", () => {
  test("exemplo clássico", () => {
    const graph = {
      A: ["B", "C"],
      B: ["D", "E"],
      C: ["F"],
      D: [],
      E: [],
      F: [],
    };
    expect(bfs(graph, "A")).toEqual(["A", "B", "C", "D", "E", "F"]);
  });

  test("grafo com apenas 1 nó", () => {
    const graph = { A: [] };
    expect(bfs(graph, "A")).toEqual(["A"]);
  });

  test("grafo desconectado (visita apenas componente ligada)", () => {
    const graph = {
      A: ["B"],
      B: [],
      C: ["D"],
      D: [],
    };
    expect(bfs(graph, "A")).toEqual(["A", "B"]);
  });

  test("grafo com ciclo", () => {
    const graph = {
      A: ["B", "C"],
      B: ["A", "D"],
      C: ["A"],
      D: ["B"],
    };
    expect(bfs(graph, "A")).toEqual(["A", "B", "C", "D"]);
  });
});
