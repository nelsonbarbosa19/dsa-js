# 📊 Cheatsheet — Arrays

## Problemas mais comuns

### Two Sum

- Templates possíveis:
  - Brute force (2 loops) → `O(n²)`
  - Hash Map (lookup em O(1)) → `O(n)`
- Melhor em entrevistas: ✅ **Hash Map**
- Notas: Brute force é bom ponto de partida para explicar.

### Maximum Subarray (Kadane’s Algorithm)

- Templates possíveis:
  - Brute force (todos subarrays) → `O(n²)`
  - Kadane’s (DP) → `O(n)`
- Melhor em entrevistas: ✅ **Kadane’s**
- Notas: Explica brute force antes, depois otimiza para Kadane’s.

### Product of Array Except Self

- Templates possíveis:
  - Usar divisão (cuidado com zero) → `O(n)`
  - Prefix + Suffix arrays → `O(n)`
- Melhor em entrevistas: ✅ **Prefix + Suffix arrays**
- Notas: Não usar divisão é o esperado.

---

## Resumo de Complexidades

| Problema                     | Melhor Template | Tempo | Espaço |
| ---------------------------- | --------------- | ----- | ------ |
| Two Sum                      | Hash Map        | O(n)  | O(n)   |
| Maximum Subarray             | Kadane’s        | O(n)  | O(1)   |
| Product of Array Except Self | Prefix + Suffix | O(n)  | O(n)   |
| ---------------------------- | --------------- | ----- | ------ |
