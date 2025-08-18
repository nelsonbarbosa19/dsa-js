/**
 * Given a sentence (string), returns a new string
 * where each word is reversed but the word order remains.
 *
 * @param {string} sentence
 * @returns {string}
 */
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

module.exports = reverseWords;

describe("reverseWords function", () => {
  test("reverses each word but keeps word order", () => {
    expect(reverseWords("hello world from ChatGPT")).toBe(
      "olleh dlrow morf TPGtahC"
    );
  });

  test("handles empty string", () => {
    expect(reverseWords("")).toBe("");
  });

  test("handles single word", () => {
    expect(reverseWords("JavaScript")).toBe("tpircSavaJ");
  });

  test("handles multiple spaces", () => {
    expect(reverseWords("a  b   c")).toBe("a  b   c"); // spaces preserved but words reversed (single letters stay same)
  });
});
