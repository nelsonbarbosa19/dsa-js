//05-sliding-window/2_fixedWindowMaxSum.test.js

/**
 * Exercício: Fixed Window Maximum Sum
 *
 * Descrição:
 * Dado um array de inteiros `nums` e um número `k`,
 * encontra a soma máxima de qualquer subarray contínuo de tamanho `k`.
 *
 * Input/Output:
 * - Input: nums = [2, 1, 5, 1, 3, 2], k = 3
 * - Output: 9   (subarray [5, 1, 3] tem soma máxima)
 *
 * - Input: nums = [1, 2, 3, 4, 5], k = 2
 * - Output: 9   (subarray [4, 5] tem soma máxima)
 */

function fixedWindowMaxSum(nums, k) {
  // let left = 0;
  // let right = 0;
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  maxSum = currentSum;

  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

describe("Fixed Window Maximum Sum", () => {
  test("Exemplo clássico", () => {
    expect(fixedWindowMaxSum([2, 1, 5, 1, 3, 2], 3)).toBe(9);
  });

  test("Caso crescente", () => {
    expect(fixedWindowMaxSum([1, 2, 3, 4, 5], 2)).toBe(9);
  });

  test("Caso com negativos", () => {
    expect(fixedWindowMaxSum([-1, -2, -3, -4], 2)).toBe(-3);
  });

  test("Caso com janela de tamanho igual ao array", () => {
    expect(fixedWindowMaxSum([1, 2, 3], 3)).toBe(6);
  });
});
