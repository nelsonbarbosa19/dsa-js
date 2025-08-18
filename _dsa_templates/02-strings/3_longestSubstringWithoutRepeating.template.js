// 02-strings/3_longestSubstringWithoutRepeating.template.js

/**
 * Template: Longest Substring Without Repeating Characters (Sliding Window + HashMap)
 * Quando usar: Encontrar a maior substring única, útil em problemas de compressão, substrings ou tokens.
 * Notas: Use um mapa para guardar o último índice de cada caractere e mover a "janela" de forma dinâmica.
 * Complexidade:
 * - Tempo: O(n), porque cada caractere é visitado no máximo duas vezes (entrada e saída da janela).
 * - Espaço: O(min(n, charset)), porque armazenamos cada caractere único no mapa.
 * Exemplos:
 * Input: "abcabcbb"
 * Output: 3 ("abc")
 */

function lengthOfLongestSubstring(s) {
  const map = new Map();
  let maxLen = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (map.has(char) && map.get(char) >= start) {
      start = map.get(char) + 1;
    }

    map.set(char, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}
