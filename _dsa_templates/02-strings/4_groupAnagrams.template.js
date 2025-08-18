// 02-strings/4_groupAnagrams.template.js

/**
 * Template: Group Anagrams
 * Quando usar: Agrupar strings que são anagramas umas das outras, útil em problemas de dicionário ou combinações.
 * Notas: Ordenar cada string ou usar um hash de contagem de caracteres como chave no mapa.
 * Complexidade:
 * - Tempo: O(n * k log k), n strings de tamanho k, por causa da ordenação de cada string.
 * - Espaço: O(n * k), porque armazenamos todas as strings agrupadas no mapa.
 * Exemplos:
 * Input: ["eat","tea","tan","ate","nat","bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 */

function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
}
