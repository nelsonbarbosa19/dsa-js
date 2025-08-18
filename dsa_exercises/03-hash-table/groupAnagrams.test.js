/**
 * Given an array of strings, group the anagrams together.
 *
 * @param {string[]} strs
 * @returns {string[][]} groups of anagrams
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [
 *   ["eat", "tea", "ate"],
 *   ["tan", "nat"],
 *   ["bat"]
 * ]
 */
function groupAnagrams(strs) {
  const anagrams = {};
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (anagrams[sortedStr] === undefined) {
      anagrams[sortedStr] = [str];
    } else {
      anagrams[sortedStr].push(str);
    }
  }

  return Object.values(anagrams);
}

module.exports = groupAnagrams;

describe("groupAnagrams function", () => {
  test("groups anagrams correctly", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    const result = groupAnagrams(input);

    // Sort groups and their contents for comparison
    const sortGroup = (group) =>
      group
        .map((arr) => arr.slice().sort())
        .sort((a, b) => a[0].localeCompare(b[0]));

    expect(sortGroup(result)).toEqual(sortGroup(output));
  });
});
