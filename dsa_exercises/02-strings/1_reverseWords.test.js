/**
 * 📝 Exercício: Reverse Words in a String
 *
 * Descrição:
 * Dada uma string `s`, inverta a ordem das palavras.
 * Uma palavra é definida como uma sequência de caracteres não-espaciais.
 * A string resultante não deve conter espaços extras.
 *
 * Exemplos:
 * Input: "the sky is blue" → Output: "blue is sky the"
 * Input: "  hello world  " → Output: "world hello"
 * Input: "a good   example" → Output: "example good a"
 */

function reverseWords(s) {
  // return s.split(/\s/).reverse().join();

  const arr = s.split(/\s/);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}

/** Testes usando Jest */
describe("Reverse Words in a String", () => {
  test("Caso 1", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  });

  test("Caso 2 - espaços no início e fim", () => {
    expect(reverseWords("  hello world  ")).toBe("world hello");
  });

  test("Caso 3 - múltiplos espaços entre palavras", () => {
    expect(reverseWords("a good   example")).toBe("example good a");
  });

  test("Caso 4 - uma palavra", () => {
    expect(reverseWords("single")).toBe("single");
  });

  test("Caso 5 - string vazia", () => {
    expect(reverseWords("")).toBe("");
  });
});
