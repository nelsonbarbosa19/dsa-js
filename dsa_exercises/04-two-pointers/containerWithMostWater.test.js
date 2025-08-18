/**
 * LeetCode #11 - Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Description:
 * Given n non-negative integers height[i] where each represents a point at coordinate (i, height[i]),
 * n vertical lines are drawn such that the two endpoints of line i is at (i, height[i]) and (i, 0).
 * Find two lines, which together with the x-axis forms a container,
 * such that the container contains the most water.
 *
 * Note: You may not slant the container.
 *
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;

  let maxWaterArea = 0;

  while (left < right) {
    const waterArea = (right - left) * Math.min(height[left], height[right]);
    maxWaterArea = Math.max(maxWaterArea, waterArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWaterArea;
}

module.exports = maxArea;

describe("maxArea function", () => {
  test("maxArea returns correct maximum water area", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 1])).toBe(1);
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    expect(maxArea([1, 2, 1])).toBe(2);
  });
});
