/**
 * @fileoverview LeetCode #3 - Longest Substring Without Repeating Characters
 *
 * Dada uma string s, encontra o tamanho da substring mais longa que não tenha caracteres repetidos.
 *
 * Exemplo:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explicação: A resposta é "abc", com tamanho 3.
 *
 * Dica:
 * - Usa uma "janela deslizante" com dois ponteiros para representar o intervalo atual sem caracteres repetidos.
 * - Move o ponteiro direito para explorar e o esquerdo para remover repetições.
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxSize = 0;
  const map = new Map();

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }

    map.set(char, right);
    maxSize = Math.max(maxSize, right - left + 1);
  }

  return maxSize;
}

describe("maxArea function", () => {
  test("lengthOfLongestSubstring - exemplos do LeetCode", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring(" ")).toBe(1);
    expect(lengthOfLongestSubstring("au")).toBe(2);
  });
});
