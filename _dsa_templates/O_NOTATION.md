# 📊 DSA Complexity Cheatsheet (Tempo & Espaço)

Este cheatsheet resume as principais **complexidades Big-O** que aparecem em entrevistas técnicas, aplicadas aos templates deste repositório, com explicação do **porquê**.

---

## 🔢 Classes principais de Big-O (tempo)

- **O(1)** → constante (ex: acesso a array, lookup em HashMap).  
  _Porquê:_ Não depende do tamanho da entrada, apenas uma operação direta.

- **O(log n)** → logarítmico (ex: Binary Search).  
  _Porquê:_ A cada passo reduzimos o espaço de pesquisa pela metade.

- **O(n)** → linear (ex: percorrer array, string).  
  _Porquê:_ Precisamos visitar todos os elementos uma vez.

- **O(n log n)** → quase linear (ex: MergeSort, QuickSort médio).  
  _Porquê:_ Cada divisão log(n) + percorrer n elementos em cada nível.

- **O(n²)** → quadrático (ex: nested loops, substring palíndromos).  
  _Porquê:_ Dois loops aninhados percorrem todos os pares.

- **O(2^n)** → exponencial (ex: subsets, backtracking brute force).  
  _Porquê:_ Cada decisão gera duas possibilidades que se multiplicam.

- **O(n!)** → fatorial (ex: permutations, traveling salesman).  
  _Porquê:_ Todas as permutações possíveis são exploradas.

---

## 🗂️ Complexidades por Estrutura / Template

| Estrutura / Algoritmo            | Tempo              | Espaço extra          | Quando usar               | Porquê / Raciocínio                                 |
| -------------------------------- | ------------------ | --------------------- | ------------------------- | --------------------------------------------------- |
| **Array**                        | O(1) acesso        | O(1)                  | Acesso rápido             | Indexação direta                                    |
|                                  | O(n) inserção meio | O(1)                  | Inserção no meio          | Precisa deslocar todos os elementos à direita       |
| **HashMap / HashSet**            | O(1) lookup/insert | O(n)                  | Frequência, Two Sum       | HashMap permite acesso direto pelo key              |
| **Two Pointers**                 | O(n)               | O(1)                  | Palíndromos, pares        | Um loop único percorre os elementos com 2 ponteiros |
| **Sliding Window**               | O(n)               | O(k)                  | Substrings, subarrays     | Expandimos/reduzimos a janela uma vez por elemento  |
| **Binary Search (sorted array)** | O(log n)           | O(1)                  | Pesquisa rápida           | A cada passo cortamos pela metade                   |
| **Binary Tree (DFS/BFS)**        | O(n)               | O(h) DFS / O(n) BFS   | Traversals                | Visitamos todos os nós uma vez                      |
| **Binary Search Tree (BST)**     | O(log n)           | O(h)                  | Insert, search, delete    | Percorremos altura da árvore balanceada             |
| **Heap / Priority Queue**        | O(log n)           | O(n)                  | Top K, median finder      | Inserir/remover ajusta log n níveis do heap         |
| **Graph (DFS/BFS)**              | O(V + E)           | O(V)                  | Connected components      | Visitamos todos vértices e arestas                  |
| **Dynamic Programming (1D)**     | O(n)               | O(n) → O(1) otimizado | Fibonacci, House Robber   | Calculamos cada subproblema uma vez                 |
| **Dynamic Programming (2D)**     | O(m × n)           | O(m × n)              | Grid paths, Knapsack      | Cada célula depende de vizinhos, calculada uma vez  |
| **Backtracking**                 | O(b^d)             | O(d)                  | N-Queens, subsets         | Cada nível gera b opções que se multiplicam         |
| **Prefix Sum**                   | O(n) preprocess    | O(n)                  | Range sum queries         | Somatório acumulado em linear, query O(1)           |
| **Union-Find (DSU)**             | O(α(n)) ≈ O(1)     | O(n)                  | Graph connectivity        | Operações quase constantes com path compression     |
| **Trie (Prefix Tree)**           | O(L)               | O(total chars)        | Autocomplete, word search | Cada nível representa um char do prefixo            |
| -------------------------------- | ------------------ | --------------------- | ------------------------- | --------------------------------------------------- |

---

## 📝 Exemplos de inputs/outputs típicos

- **Two Pointers (pair sum)**  
  Input: `[1, 2, 4, 7, 11, 15], target=15` → Output: `[4, 11]`

- **Sliding Window (max sum k=3)**  
  Input: `[2, 1, 5, 1, 3, 2], k=3` → Output: `9`

- **HashMap (two sum)**  
  Input: `[2, 7, 11, 15], target=9` → Output: `[0,1]`

- **Binary Search**  
  Input: `[1,3,5,7,9], target=7` → Output: `3` (índice)

---

🔥 Saber isto permite:

1. Reconhecer **qual template aplicar**.
2. Defender a tua escolha em **tempo e espaço**.
3. Mostrar **intuição de eficiência** → ponto forte em FAANG interviews.
