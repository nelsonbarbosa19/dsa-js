| Problema clássico                                  | Templates possíveis                                        | Complexidade                  | Melhor escolha em entrevista   | Notas                                                   |
| -------------------------------------------------- | ---------------------------------------------------------- | ----------------------------- | ------------------------------ | ------------------------------------------------------- |
| **Two Sum**                                        | Brute force (2 loops), Hash Map (lookup em O(1))           | O(n²) vs O(n)                 | ✅ **Hash Map**                | Brute force é fácil de explicar como ponto de partida.  |
| **Two Sum (sorted array)**                         | Brute force, Binary Search (fix + busca), Two Pointers     | O(n²), O(n log n), O(n)       | ✅ **Two Pointers**            | Mais elegante, sem extra space.                         |
| **Valid Anagram**                                  | Sort + compare, Hash Map counting                          | O(n log n) vs O(n)            | ✅ **Hash Map counting**       | Sort funciona mas é mais lento.                         |
| **Group Anagrams**                                 | Sort como chave, Hash Map com contador de letras           | O(nk log k) vs O(nk)          | ✅ **Hash Map counting**       | Versão counting é mais otimizada, mas sort é aceitável. |
| **Longest Substring Without Repeating Characters** | Brute force (todas substrings), Sliding Window com Set/Map | O(n³) vs O(n)                 | ✅ **Sliding Window**          | Um dos problemas mais típicos de sliding window.        |
| **Maximum Subarray (Kadane’s)**                    | Brute force (todos subarrays), DP (Kadane)                 | O(n²) vs O(n)                 | ✅ **Kadane’s**                | Resposta esperada em entrevistas.                       |
| **Binary Search**                                  | Iterativo, Recursivo                                       | O(log n)                      | ✅ **Iterativo**               | Iterativo é mais robusto (evita stack overflow).        |
| **Search in BST**                                  | DFS recursivo, Iterativo (while loop)                      | O(h)                          | ✅ **Iterativo**               | Ambos aceites, iterativo mais direto.                   |
| **Inorder Traversal (Binary Tree)**                | Recursivo, Iterativo com stack                             | O(n)                          | ✅ **Recursivo** (se stack OK) | Iterativo útil se stack overflow for preocupação.       |
| **Level Order Traversal (Binary Tree)**            | BFS com Queue                                              | O(n)                          | ✅ **Queue BFS**               | Padrão clássico.                                        |
| **Permutations / Combinations**                    | Recursão simples, Backtracking (DFS + undo)                | O(n!)                         | ✅ **Backtracking**            | Deve ser sempre explicado como backtracking.            |
| **Climbing Stairs / Fibonacci**                    | Recursão pura, DP Top-Down (memoization), DP Bottom-Up     | Exponencial vs O(n)           | ✅ **DP Bottom-Up**            | Mas bom começar explicando a recursão simples.          |
| **Coin Change (Min coins)**                        | Recursão, DP (Bottom-Up 1D)                                | Exponencial vs O(n \* amount) | ✅ **DP Bottom-Up**            | É exatamente o que esperam.                             |
| **Number of Islands**                              | DFS, BFS, Union-Find                                       | O(n\*m)                       | ✅ **DFS/BFS**                 | Union-Find é “plus points”.                             |
| **Meeting Rooms / Merge Intervals**                | Sort + Merge                                               | O(n log n)                    | ✅ **Sort + Merge**            | Muito clássico.                                         |
| **Median Finder (stream)**                         | Sort cada vez, Two Heaps                                   | O(n log n) vs O(log n)        | ✅ **Two Heaps**               | Um dos problemas de design mais pedidos.                |
| -------------------------------------------------- | ---------------------------------------------------------- | ----------------------------- | ------------------------------ | ------------------------------------------------------- |

⚡ Estratégia em entrevista:
1 - Começa com a versão mais simples (brute force ou recursiva) → mostra clareza.
2 - Evolui para o template eficiente → mostra maturidade.
3 - Explica trade-offs: tempo, espaço, legibilidade.
