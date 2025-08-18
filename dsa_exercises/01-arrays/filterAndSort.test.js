/**
 * Given an array of numbers, write a function that:
 * - Removes all even numbers
 * - Sorts the remaining odd numbers in ascending order
 * - Returns the new sorted array
 *
 * Example:
 * Input: [5, 2, 9, 1, 6, 3, 8]
 * Output: [1, 3, 5, 9]
 */
function filterAndSort(arr) {
  return arr.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
}

module.exports = filterAndSort;

describe("filterAndSort function", () => {
  test("removes even numbers and sorts odd numbers ascending", () => {
    expect(filterAndSort([5, 2, 9, 1, 6, 3, 8])).toEqual([1, 3, 5, 9]);
  });

  test("returns empty array if no odd numbers", () => {
    expect(filterAndSort([2, 4, 6, 8])).toEqual([]);
  });

  test("works with empty array", () => {
    expect(filterAndSort([])).toEqual([]);
  });

  test("keeps duplicate odd numbers and sorts", () => {
    expect(filterAndSort([7, 1, 3, 7, 2])).toEqual([1, 3, 7, 7]);
  });
});
