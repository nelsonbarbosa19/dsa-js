/**
 * Counts frequency of each character in a string.
 * @param {string} str
 * @returns {Object} frequency map
 */
function charFrequency(str) {
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    freq[char] = freq[char] === undefined ? 1 : freq[char] + 1;
  }

  return freq;
}

module.exports = charFrequency;

describe("charFrequency function", () => {
  test("counts characters frequency correctly", () => {
    expect(charFrequency("banana")).toEqual({ b: 1, a: 3, n: 2 });
    expect(charFrequency("")).toEqual({});
    expect(charFrequency("aabbcc")).toEqual({ a: 2, b: 2, c: 2 });
    expect(charFrequency("112233")).toEqual({ 1: 2, 2: 2, 3: 2 });
  });
});
