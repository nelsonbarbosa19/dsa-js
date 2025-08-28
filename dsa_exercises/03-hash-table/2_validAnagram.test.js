// 2_validAnagram.test.js

/**
 * Enunciado:
 * Dado duas strings s e t, escreva uma função que determine se t é um anagrama de s.
 *
 * Um anagrama é uma palavra formada pela reorganização das letras de outra,
 * usando todas as letras exatamente uma vez.
 *
 * Exemplos:
 * - Input: s = "anagram", t = "nagaram" → Output: true
 * - Input: s = "rat", t = "car" → Output: false
 *
 * Notas:
 * - Apenas letras minúsculas estão envolvidas.
 * - O comprimento de s e t pode ser diferente.
 *
 * Desafio extra:
 * Resolver em O(n) tempo.
 */

function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  // return (
  //   s.split("").sort().join("").toLowerCase() ===
  //   t.split("").sort().join("").toLowerCase()
  // );

  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char)) {
      return false;
    }

    map.set(char, map.get(char) - 1);

    if (map.get(char) === 0) {
      map.delete(char);
    }
  }

  return map.size === 0;
}

describe("Valid Anagram", () => {
  test("Caso positivo simples", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
  });

  test("Caso negativo simples", () => {
    expect(validAnagram("rat", "car")).toBe(false);
  });

  test("Strings com diferentes comprimentos", () => {
    expect(validAnagram("a", "aa")).toBe(false);
  });

  test("Strings vazias", () => {
    expect(validAnagram("", "")).toBe(true);
  });

  test("Strings com letras repetidas", () => {
    expect(validAnagram("aabb", "bbaa")).toBe(true);
  });
});
