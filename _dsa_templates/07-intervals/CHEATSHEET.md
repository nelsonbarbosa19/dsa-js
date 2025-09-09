# Cheatsheet – Intervals

1. Heurística prática:

Se a tarefa é juntar/mesclar intervalos → ordena por start.
Se a tarefa é escolher o máximo/mínimo de intervalos sem overlap → ordena por end.

2. Resumindo numa frase
   👉 “Para fundir, começa pelo start; para selecionar, começa pelo end.” ✅

## Padrões principais

1. **Sort + Merge**

   - Ordena intervalos por `start`.
   - Percorre acumulando/mesclando (`end = max(end, nextEnd)`).
   - Ex.: `mergeIntervals`, `insertInterval`.

2. **Overlap Check**

   - Verificar se dois intervals se sobrepõem:
     ```
     a.start < b.end && b.start < a.end
     ```
   - Usado em "Meeting Rooms I".

3. **Start/End arrays (dois ponteiros)**

   - Extrai todos os `starts` e `ends`.
   - Ordena ambos.
   - Avança ponteiros para calcular salas mínimas (`Meeting Rooms II`).

4. **Heap (min-heap pelo end)**
   - Empilha reuniões em ordem de end-time.
   - Se `start >= minEnd`, libertar sala (`heap.pop()`).
   - Tamanho do heap = salas necessárias.

---

## Complexidade típica

- Sort: `O(n log n)`
- Merge linear: `O(n)`
- Heap push/pop: `O(log n)`

---

## Erros comuns em entrevistas

- Esquecer de ordenar por `start` antes de mesclar.
- Usar só `end` errado ao verificar overlaps.
- Confundir **Meeting Rooms I** (boolean) com **Meeting Rooms II** (mín nº de salas).
