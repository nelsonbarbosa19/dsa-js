/**
 * LeetCode #15 - 3Sum
 * https://leetcode.com/problems/3sum/
 *
 * Description:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue; // skip duplicates

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);

        while (left < right && sortedNums[left] === sortedNums[left + 1])
          left++;
        while (left < right && sortedNums[right] === sortedNums[right - 1])
          right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

module.exports = threeSum;

describe("maxArea function", () => {
  test("threeSum returns correct triplets", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(threeSum([])).toEqual([]);
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    expect(threeSum([0, 0, 1, 0])).toEqual([[0, 0, 0]]);
  });
});
