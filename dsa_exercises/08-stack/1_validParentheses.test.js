// 08-stack/1_validParentheses.test.js

/**
 * 📝 Exercício: Valid Parentheses
 * Descrição: Dada uma string contendo apenas '(', ')', '{', '}', '[' e ']', determine se a string é válida.
 * Uma string é válida se:
 *  1. Parênteses de abertura devem ser fechados pelo mesmo tipo.
 *  2. Parênteses de abertura devem ser fechados na ordem correta.
 * Input: "()"
 * Output: true
 * Input: "()[]{}"
 * Output: true
 * Input: "(]"
 * Output: false
 */

function isValid(s) {
  if (!s?.length) {
    return true;
  }

  if (s.length % 2 !== 0) {
    return false;
  }

  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const prevStack = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      prevStack.push(s[i]);
    } else {
      const lastEl = prevStack.pop();
      if (s[i] !== map.get(lastEl)) {
        return false;
      }
    }
  }

  return prevStack.length === 0;
}

describe("Valid Parentheses", () => {
  test("Exemplo 1", () => {
    expect(isValid("()")).toBe(true);
  });

  test("Exemplo 2", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("Exemplo 3", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("Exemplo 4", () => {
    expect(isValid("{[]}")).toBe(true);
  });

  test("Exemplo 5", () => {
    expect(isValid("")).toBe(true);
  });
});
