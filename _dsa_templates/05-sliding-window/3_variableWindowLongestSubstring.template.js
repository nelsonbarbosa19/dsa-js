// 05-sliding-window/3_variableWindowLongestSubstring.template.js

/**
 * Template: Sliding Window de tamanho variável - Maior substring sem repetir caracteres
 * Quando usar: Quando precisas encontrar uma substring ou subarray com uma
 *              condição que pode alterar o tamanho da janela.
 * Notas:
 * - Muito comum em problemas de strings.
 * - Usa Map ou Set para controlar elementos na janela.
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(min(n, alfabeto))
 */

function variableWindowLongestSubstring(s) {
  let seenSet = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (seenSet.has(s[right])) {
      seenSet.delete(s[left]);
      left++;
    }

    seenSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

module.exports = variableWindowLongestSubstring;
