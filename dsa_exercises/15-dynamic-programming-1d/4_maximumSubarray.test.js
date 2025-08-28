// 15-dynamic-programming-1d/4_maximumSubarray.test.js

/**
 * Exercício: Maximum Subarray (Kadane’s Algorithm)
 * Descrição:
 *   Dado um array de inteiros nums, encontra o subarray contínuo com a maior soma possível
 *   e retorna essa soma.
 * Input/Output:
 *   - Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 *     Output: 6  (subarray [4,-1,2,1])
 *   - Input: nums = [1]
 *     Output: 1
 *   - Input: nums = [5,4,-1,7,8]
 *     Output: 23
 */

function maxSubArray(nums) {
  if (!nums?.length) {
    return 0;
  }

  let currentSum = nums[0];
  let maximumSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maximumSum = Math.max(maximumSum, currentSum);
  }

  return maximumSum;
}

describe("Maximum Subarray", () => {
  test("Exemplo 1", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test("Exemplo 2", () => {
    expect(maxSubArray([1])).toBe(1);
  });

  test("Exemplo 3", () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });
});
