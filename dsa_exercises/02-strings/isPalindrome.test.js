/**
 * Checks if a given string is a palindrome, ignoring spaces, punctuation, and case.
 *
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  const filteredStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = filteredStr.split("").reverse().join("");
  return filteredStr === reversedStr;
}

module.exports = isPalindrome;

describe("isPalindrome function", () => {
  test("returns true for palindrome ignoring punctuation and case", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    expect(isPalindrome("No lemon, no melon")).toBe(true);
  });

  test("returns false for non-palindromes", () => {
    expect(isPalindrome("Hello World")).toBe(false);
    expect(isPalindrome("OpenAI")).toBe(false);
  });

  test("handles empty string as palindrome", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("handles strings with only punctuation", () => {
    expect(isPalindrome("!!!")).toBe(true);
  });
});
