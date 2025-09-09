/**
 * Descrição:
 * Dado um grafo não dirigido representado por adjacency list,
 * implementa uma função que retorna true se o grafo contiver um ciclo.
 *
 * Nota:
 * - O grafo pode ser desconectado (precisas verificar cada componente).
 * - Usa DFS ou BFS.
 *
 * Exemplo:
 *   Input:
 *     {
 *       A: ["B"],
 *       B: ["A", "C"],
 *       C: ["B", "D"],
 *       D: ["C", "A"]
 *     }
 *   Output: true  (ciclo A-B-C-D-A)
 */

function hasCycle(graph) {
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    const neighbors = graph[node];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }
  }

  for (const n of Object.keys(graph)) {
    if (!visited.has(n)) {
      if (dfs(n, null)) return true;
    }
  }

  return false;
}

module.exports = { hasCycle };

/* Testes Jest */
describe("hasCycle (Undirected Graph)", () => {
  test("grafo com ciclo simples", () => {
    const graph = {
      A: ["B"],
      B: ["A", "C"],
      C: ["B", "D"],
      D: ["C", "A"],
    };
    expect(hasCycle(graph)).toBe(true);
  });

  test("grafo em linha sem ciclo", () => {
    const graph = {
      A: ["B"],
      B: ["A", "C"],
      C: ["B", "D"],
      D: ["C"],
    };
    expect(hasCycle(graph)).toBe(false);
  });

  test("grafo desconectado com ciclo", () => {
    const graph = {
      A: ["B"],
      B: ["A"],
      C: ["D"],
      D: ["C", "E"],
      E: ["D", "F"],
      F: ["E", "C"],
    };
    expect(hasCycle(graph)).toBe(true);
  });

  test("grafo vazio", () => {
    const graph = {};
    expect(hasCycle(graph)).toBe(false);
  });

  test("grafo com 1 nó sem arestas", () => {
    const graph = { A: [] };
    expect(hasCycle(graph)).toBe(false);
  });
});
/**
 * Descrição:
 * Dado um grafo não dirigido representado por adjacency list,
 * implementa uma função que retorna true se o grafo contiver um ciclo.
 *
 * Nota:
 * - O grafo pode ser desconectado (precisas verificar cada componente).
 * - Usa DFS ou BFS.
 *
 * Exemplo:
 *   Input:
 *     {
 *       A: ["B"],
 *       B: ["A", "C"],
 *       C: ["B", "D"],
 *       D: ["C", "A"]
 *     }
 *   Output: true  (ciclo A-B-C-D-A)
 */

function hasCycle(graph) {
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    const neighbors = graph[node];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }
  }

  for (const n of Object.keys(graph)) {
    if (!visited.has(n)) {
      if (dfs(n, null)) return true;
    }
  }

  return false;
}

module.exports = { hasCycle };

/* Testes Jest */
describe("hasCycle (Undirected Graph)", () => {
  test("grafo com ciclo simples", () => {
    const graph = {
      A: ["B"],
      B: ["A", "C"],
      C: ["B", "D"],
      D: ["C", "A"],
    };
    expect(hasCycle(graph)).toBe(true);
  });

  test("grafo em linha sem ciclo", () => {
    const graph = {
      A: ["B"],
      B: ["A", "C"],
      C: ["B", "D"],
      D: ["C"],
    };
    expect(hasCycle(graph)).toBe(false);
  });

  test("grafo desconectado com ciclo", () => {
    const graph = {
      A: ["B"],
      B: ["A"],
      C: ["D"],
      D: ["C", "E"],
      E: ["D", "F"],
      F: ["E", "C"],
    };
    expect(hasCycle(graph)).toBe(true);
  });

  test("grafo vazio", () => {
    const graph = {};
    expect(hasCycle(graph)).toBe(false);
  });

  test("grafo com 1 nó sem arestas", () => {
    const graph = { A: [] };
    expect(hasCycle(graph)).toBe(false);
  });
});
