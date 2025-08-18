# 📊 CHEATSHEET de Complexidade (Big-O)

Guia rápido para reconhecer as complexidades mais comuns em entrevistas.

---

## ⚡ Complexidades mais frequentes

### **O(1) – Constante**

- **Quando acontece:** número fixo de operações, independente do tamanho da entrada.
- **Exemplos:**
  - Acessar `arr[i]`
  - Verificar se número é par
  - Inserir no início de uma `Stack`
- **Porquê:** sempre a mesma quantidade de operações.

---

### **O(log n) – Logarítmica**

- **Quando acontece:** cada passo reduz o problema a uma fração (metade, terços, etc.).
- **Exemplos:**
  - Binary Search em array ordenado
  - Operações em BST/AVL/Red-Black Trees
- **Porquê:** a cada iteração elimina-se metade da entrada.

---

### **O(n) – Linear**

- **Quando acontece:** percorre todos os elementos **uma vez**.
- **Exemplos:**
  - Encontrar máximo/mínimo em array
  - Verificar se uma string é palíndromo
  - Somar todos os elementos
- **Porquê:** 1 ciclo completo → custo proporcional a `n`.

---

### **O(n log n) – Quase linear**

- **Quando acontece:** percorre todos os elementos (`n`) mas também divide o problema (`log n`).
- **Exemplos:**
  - Merge Sort
  - Quick Sort (médio caso)
  - Heapsort
- **Porquê:** cada elemento participa em divisões sucessivas.

---

### **O(n²) – Quadrática**

- **Quando acontece:** dois ciclos aninhados sobre a entrada.
- **Exemplos:**
  - Comparar todos os pares em array (`Two Sum` ingênuo)
  - Multiplicação simples de matrizes
- **Porquê:** cada elemento é comparado com todos os outros.

---

### **O(n³) – Cúbica**

- **Quando acontece:** três loops aninhados.
- **Exemplos:**
  - Floyd-Warshall (caminhos mínimos em grafos)
  - DP em 3 dimensões
- **Porquê:** para cada elemento, processa combinações 2D.

---

### **O(2^n) – Exponencial**

- **Quando acontece:** cada decisão gera 2 ramificações → explora todas as combinações.
- **Exemplos:**
  - Subconjuntos (Power Set)
  - Sudoku solver (backtracking)
  - N-Queens
- **Porquê:** o espaço de soluções dobra a cada elemento.

---

### **O(n!) – Fatorial**

- **Quando acontece:** gera todas as permutações possíveis de `n`.
- **Exemplos:**
  - Travelling Salesman (brute force)
  - Permutações de string/array
- **Porquê:** há `n!` formas diferentes de organizar os elementos.

---

## 🧠 Regras práticas rápidas

- **1 ciclo simples** → `O(n)`

  > "O(n) porque percorro todos os elementos."

- **2 ciclos aninhados** → `O(n²)`

  > "O(n²) porque cada elemento é comparado com todos os outros."

- **Divide pela metade** → `O(log n)`

  > "O(log n) porque corto o problema pela metade a cada passo."

- **Loop + dividir** → `O(n log n)`

  > "O(n log n) porque percorro todos os elementos mas também divido o problema."

- **Recursão com ramos múltiplos** → `O(2^n)` ou `O(n!)`
  > "Exponencial porque exploro todas as combinações possíveis."

---
