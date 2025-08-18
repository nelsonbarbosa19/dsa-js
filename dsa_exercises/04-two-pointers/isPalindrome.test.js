/**
 * Checks if a string is a palindrome considering only alphanumeric characters and ignoring case.
 *
 * @param {string} s
 * @returns {boolean}
 *
 * Example:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 */
function isPalindrome(str) {
  // const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // console.log("test: " + cleanStr);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(str[left])) left++;
    while (left < right && !isAlphaNumeric(str[right])) right--;

    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(c) {
  return /^[a-z0-9]$/i.test(c);
}

module.exports = isPalindrome;

describe("isPalindrome function", () => {
  test("returns true for palindrome ignoring non-alphanumeric chars and case", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("race a car")).toBe(false);
    expect(isPalindrome("")).toBe(true);
    expect(isPalindrome(" ")).toBe(true);
    expect(isPalindrome("0P")).toBe(false);
    expect(isPalindrome("Able was I, ere I saw Elba")).toBe(true);
  });
});
