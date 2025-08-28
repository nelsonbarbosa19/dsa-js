// 2_longestSubstringWithoutRepeatingCharacters.test.js

/**
 * Exercício: Longest Substring Without Repeating Characters
 *
 * Descrição:
 * Dada uma string `s`, encontra o comprimento da substring mais longa
 * que não contenha caracteres repetidos.
 *
 * Input / Output:
 * - Input: s = "abcabcbb" → Output: 3 ("abc")
 * - Input: s = "bbbbb" → Output: 1 ("b")
 * - Input: s = "pwwkew" → Output: 3 ("wke")
 *
 * Notas:
 * - Este é um clássico em entrevistas.
 * - Atenção à diferença entre substring (contígua) e subsequence (não precisa ser contígua).
 */

function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxSize = 0;

  const seenSet = new Set();

  /**
   *  a , b , c , a , b , c , b , b
   */
  for (let right = 0; right < s.length; right++) {
    while (seenSet.has(s[right])) {
      seenSet.delete(s[left]);
      left++;
    }

    seenSet.add(s[right]);
    maxSize = Math.max(maxSize, seenSet.size);
  }

  return maxSize;
}

describe("Longest Substring Without Repeating Characters", () => {
  test("Exemplo básico: abcabcbb", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  test("Todos iguais: bbbbb", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  test("Exemplo com repetição parcial: pwwkew", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  test("String vazia", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  test("String com 1 char", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });
});
