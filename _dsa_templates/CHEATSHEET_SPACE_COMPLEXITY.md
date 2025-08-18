# 📦 Complexidade de Espaço (Space Complexity)

---

## ⚡ O(1) – Constante

- **Quando:** não depende do tamanho da entrada, apenas usa variáveis fixas.
- **Exemplos:**
  - Two Pointers (apenas alguns índices extras)
  - Binary Search iterativo
- **Porquê:** sempre ocupa o mesmo espaço adicional.

---

## ⚡ O(log n) – Logarítmica

- **Quando:** recursão em árvores balanceadas.
- **Exemplos:**
  - Binary Search recursivo
  - DFS em árvore balanceada
- **Porquê:** altura da árvore é `log n`, logo a pilha de recursão cresce até `log n`.

---

## ⚡ O(n) – Linear

- **Quando:** precisa guardar todos os elementos.
- **Exemplos:**
  - Usar HashMap/Set para frequência
  - BFS numa árvore/grafo
  - Armazenar resultado de travessia de árvore
- **Porquê:** precisa de memória proporcional ao número de elementos.

---

## ⚡ O(n²) – Quadrática

- **Quando:** matrizes auxiliares ou DP em 2D.
- **Exemplos:**
  - Dynamic Programming em `n x n` (ex: Longest Palindromic Subsequence)
  - Floyd-Warshall (grafos)
- **Porquê:** estrutura auxiliar cresce como matriz.

---

## ⚡ O(n³) – Cúbica

- **Quando:** DP ou simulações em 3D.
- **Exemplos:**
  - DP para problemas em 3 dimensões
- **Porquê:** memória proporcional ao cubo de `n`.

---

## ⚡ O(2^n) – Exponencial

- **Quando:** gera subconjuntos em backtracking e guarda resultados.
- **Exemplos:**
  - Gerar todos os subsets
  - Guardar todas as soluções de N-Queens
- **Porquê:** o espaço explode porque mantém combinações.

---

## ⚡ O(n!) – Fatorial

- **Quando:** gera e armazena todas as permutações possíveis.
- **Exemplo:**
  - Permutações de string/array
- **Porquê:** o número de soluções a guardar é `n!`.

---

## 🧠 Regras práticas rápidas

- **Sem estruturas extras** → `O(1)`

  > "Espaço constante porque só uso variáveis fixas."

- **Recursão em árvore balanceada** → `O(log n)`

  > "Espaço logarítmico porque a profundidade máxima da pilha é log n."

- **HashMap/array auxiliar do tamanho da entrada** → `O(n)`

  > "Espaço linear porque guardo info proporcional a n."

- **Matriz auxiliar** → `O(n²)`
  > "Espaço quadrático porque crio uma tabela n x n."

---
