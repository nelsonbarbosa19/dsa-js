# Cheatsheet – Binary Tree (BT genérica)

## Traversals

- **Preorder (Root–Left–Right)**: usado para copiar/serializar.
- **Inorder (Left–Root–Right)**: ordenado apenas em BST.
- **Postorder (Left–Right–Root)**: usado em delete/subtree.
- **Level Order (BFS)**: útil em problemas de "zigzag", "right side view".

## Padrões clássicos

1. **Depth / Height**

   - DFS: `1 + max(left, right)`.
   - `maxDepth`, `isBalanced`.

2. **Global variable vs return tuple**

   - `diameterOfBinaryTree`: usar variável global para manter máximo.
   - `maxDepth` simples retorna inteiro diretamente.

3. **Backtracking**

   - Guardar caminho: push → recursão → pop (ex.: `rootToLeafPaths`).

4. **Symmetry / Same Tree**

   - DFS recursivo comparando nós par a par.
   - `isSymmetric`: compara `left.left` vs `right.right`.

5. **Invert Tree**

   - Trocar filhos `left` e `right` recursivamente.
   - Também possível com BFS (queue).

6. **Path Sum**

   - Passar soma acumulada pela recursão.
   - Short-circuit com `||` para parar cedo.

7. **Lowest Common Ancestor (BT genérica)**
   - DFS retorna:
     - `p` ou `q` se encontrado.
     - Nó atual se encontrou em ambos lados.
     - `null` se não encontrou nada.

---

## Complexidade típica

- Quase todos os problemas:
  - **Tempo:** `O(n)` (visita todos os nós)
  - **Espaço:** `O(h)` (altura, stack recursiva)

---

## Dicas de entrevista

- Se for **BST**, aproveita a propriedade (bounds/inorder).
- Se for **BT genérica**, esquece ordenação → usa DFS puro.
- Menciona sempre **iterativa alternativa (BFS/stack)** se o entrevistador puxar.
