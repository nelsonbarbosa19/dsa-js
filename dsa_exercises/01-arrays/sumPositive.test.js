/**
 * Given an array of numbers, returns the sum of all positive numbers.
 *
 * Example:
 * Input: [4, -1, 7, -3, 2, 0, -5]
 * Output: 13  // 4 + 7 + 2 = 13
 */

function sumPositive(arr) {
  return arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
}

describe("sumPositive function", () => {
  test("sums only positive numbers", () => {
    expect(sumPositive([4, -1, 7, -3, 2, 0, -5])).toBe(13);
  });

  test("returns 0 if no positive numbers", () => {
    expect(sumPositive([-2, -8, -10])).toBe(0);
  });

  test("works with empty array", () => {
    expect(sumPositive([])).toBe(0);
  });

  test("includes zero as not positive", () => {
    expect(sumPositive([0, 1, 2])).toBe(3);
  });
});
