// 03-hash-table/5_isAnagram.template.js

/**
 * Template: Is Anagram
 * Quando usar: Verificar se duas strings são anagramas.
 * Notas: Pode ser feito com sorting ou contagem de caracteres.
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(1) ou O(n) dependendo da abordagem
 */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = new Map();

  for (const ch of s) {
    count.set(ch, (count.get(ch) || 0) + 1);
  }

  for (const ch of t) {
    if (!count.has(ch)) return false;

    count.set(ch, count.get(ch) - 1);

    if (count.get(ch) === 0) count.delete(ch);
  }

  return count.size === 0;
}
