// 03-hash-table/4_groupAnagrams.template.js

/**
 * Template: Group Anagrams
 * Quando usar: Agrupar palavras que são anagramas umas das outras.
 * Notas: A chave é normalmente a palavra ordenada ou um contador de letras.
 * Complexidade:
 * - Tempo O(n * k log k)
 * - Espaço O(n)
 */

function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}
