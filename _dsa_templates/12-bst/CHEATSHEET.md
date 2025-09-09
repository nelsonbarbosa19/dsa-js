# Cheatsheet – Binary Search Tree (BST)

## Propriedade chave

- Para cada nó:
  - Todos os valores da subárvore esquerda < nó
  - Todos os valores da subárvore direita > nó

---

## Operações clássicas

1. **Search**

   - Iterativo ou recursivo.
   - `O(h)` tempo (h = altura).

2. **Insert**

   - Desce recursivamente até posição null.
   - Insere novo nó.

3. **Delete**

   - 3 casos:
     - Nó folha → remove direto.
     - Um filho → substitui pelo filho.
     - Dois filhos → substitui pelo `min` da direita ou `max` da esquerda.

4. **Find Min/Max**

   - Min: segue `left` até null.
   - Max: segue `right` até null.

5. **Validate BST**

   - **Bounds:** cada nó deve estar em `(min, max)`.
   - **Inorder:** travessia inorder deve ser estritamente crescente.

6. **Kth Smallest**

   - Inorder traversal com contador.

7. **Lowest Common Ancestor (LCA)**

   - Se ambos < root → vai à esquerda.
   - Se ambos > root → vai à direita.
   - Caso contrário → root é o LCA.

8. **Range Sum**
   - DFS com poda:
     - Se `node.val < low` → só explorar direita.
     - Se `node.val > high` → só explorar esquerda.

---

## Complexidade típica

- **Tempo:** `O(h)` (h = altura, log n se balanceada, n se degenerada)
- **Espaço:** `O(h)` (stack recursiva)

---

## Dicas de entrevista

- Diz sempre: _“Se a árvore estiver balanceada, é O(log n). No pior caso, degenerada,_
