/**
 * Given a string, returns the index of the first unique character.
 * If no unique character exists, returns -1.
 *
 * @param {string} s
 * @returns {number} index of first unique char or -1
 *
 * Example:
 * Input: "leetcode"
 * Output: 0
 */
function firstUniqueChar(s) {
  const uniquesMap = {};

  for (let i = 0; i < s.length; i++) {
    if (uniquesMap[s[i]] === undefined) {
      uniquesMap[s[i]] = 1;
    } else {
      uniquesMap[s[i]] = uniquesMap[s[i]] + 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (uniquesMap[s[i]] === 1) {
      return i;
    }
  }

  return -1;

  // This doesn't work:
  //   return Object.values(uniquesMap).findIndex((count) => count === 1);
}

module.exports = firstUniqueChar;

describe("firstUniqueChar function", () => {
  test("returns correct index of first unique character", () => {
    expect(firstUniqueChar("leetcode")).toBe(0);
    expect(firstUniqueChar("lleetcode")).toBe(4);
    expect(firstUniqueChar("loveleetcode")).toBe(2);
    expect(firstUniqueChar("aabbcc")).toBe(-1);
    expect(firstUniqueChar("")).toBe(-1);
    expect(firstUniqueChar("z")).toBe(0);
  });
});
