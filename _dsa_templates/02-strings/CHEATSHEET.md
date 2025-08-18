# 📝 Cheatsheet — Strings

## Problemas mais comuns

### 🔹 Valid Anagram

- Templates possíveis:
  - Sort strings e comparar → `O(n log n)`
  - Hash Map / Frequency count → `O(n)`
- Melhor em entrevistas: ✅ **Hash Map / Frequency count**
- Notas: O sorting funciona mas não é ótimo; frequência é mais eficiente.

### 🔹 Longest Substring Without Repeating Characters

- Templates possíveis:
  - Brute force (todas substrings + set) → `O(n³)`
  - Sliding window + Hash Map → `O(n)`
- Melhor em entrevistas: ✅ **Sliding window**
- Notas: Explica o brute force para depois impressionar com a otimização.

### 🔹 Palindrome Check

- Templates possíveis:
  - Reverse string e comparar → `O(n)`
  - Two pointers (comparar extremos) → `O(n)`
- Melhor em entrevistas: ✅ **Two pointers**
- Notas: Mais eficiente em espaço do que criar string invertida.

---

## Resumo de Complexidades

| Problema                                    | Melhor Template        | Tempo   | Espaço    |
| ------------------------------------------- | ---------------------- | ------- | --------- |
| Valid Anagram                               | Hash Map               | O(n)    | O(1)/O(n) |
| Longest Substring Without Repeating Chars   | Sliding Window         | O(n)    | O(n)      |
| Palindrome Check                            | Two Pointers           | O(n)    | O(1)      |
| ------------------------------------------- | ---------------------- | ------- | --------  |
