# Cheatsheet – Graphs

## Representações

- **Adjacency List** (mais comum em entrevistas).
- **Adjacency Matrix** (usado em grids densos).

---

## Traversals

1. **DFS (recursivo ou stack)**

   - Bom para detecção de ciclos, connected components, paths.
   - Complexidade: O(V + E).

2. **BFS (queue)**
   - Bom para shortest path em grafos não ponderados.
   - Usado em grids (multi-source BFS, flooding).
   - Complexidade: O(V + E).

---

## Problemas clássicos

1. **Number of Islands (grid → grafo implícito)**

   - DFS/BFS em células conectadas.
   - Marca visited.

2. **Shortest Path em Grid**

   - BFS nível a nível.
   - Útil em "min steps" problems.

3. **Cycle Detection**

   - **Undirected:** DFS com parent.
   - **Directed:** DFS com recursion stack (3 cores).

4. **Bipartite Check**

   - BFS com 2-coloring.

5. **Connected Components**
   - Conta quantas DFS/BFS completas são necessárias.

---

## Complexidade típica

- DFS/BFS: `O(V + E)`
- Grid m×n: `O(m×n)`

---

## Dicas de entrevista

- Sempre inicializar e manter `visited`.
- Em grid: verificar bounds (`0 <= r < m && 0 <= c < n`).
- Em ciclos: **undirected** precisa de parent check, **directed** precisa de recursion stack.
- Para shortest path → BFS se não ponderado, Dijkstra se ponderado.
