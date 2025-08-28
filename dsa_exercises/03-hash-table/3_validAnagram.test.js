/**
 * 📝 Exercício: Valid Anagram
 *
 * Dado duas strings `s` e `t`, retorna true se `t` é um anagrama de `s`, e false caso contrário.
 *
 * Um anagrama é formado reorganizando as letras de uma palavra para formar outra,
 * usando exatamente as mesmas letras.
 *
 * Exemplo:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 */

function isAnagram(s, t) {
  if (s === "" && t === "") {
    return true;
  }

  if (!s || !t || s.length !== t.length) {
    return false;
  }

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

describe("isAnagram", () => {
  test('deve retornar true para "anagram" e "nagaram"', () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  test('deve retornar false para "rat" e "car"', () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  test('deve retornar true para strings vazias "" e ""', () => {
    expect(isAnagram("", "")).toBe(true);
  });

  test("deve retornar false se tiverem tamanhos diferentes", () => {
    expect(isAnagram("abc", "ab")).toBe(false);
  });
});
