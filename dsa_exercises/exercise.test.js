/**
 * Descrição:
 * Dado um array de inteiros, encontra a soma máxima de uma subarray contínua.
 * (Exemplo clássico de Kadane's Algorithm)
 *
 * Exemplos:
 * maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]) => 6 (subarray [4,-1,2,1])
 * maxSubarraySum([1]) => 1
 * maxSubarraySum([5,4,-1,7,8]) => 23
 */

function maxSubarraySum(nums) {
  if (!nums?.length) {
    return 0;
  }

  let currSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;

/* Testes Jest */
describe("maxSubarraySum", () => {
  test("exemplo 1", () => {
    expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test("exemplo 2", () => {
    expect(maxSubarraySum([1])).toBe(1);
  });

  test("exemplo 3", () => {
    expect(maxSubarraySum([5, 4, -1, 7, 8])).toBe(23);
  });

  test("exemplo 4 - todos negativos", () => {
    expect(maxSubarraySum([-3, -2, -1, -5])).toBe(-1);
  });

  test("exemplo 5 - array vazio", () => {
    expect(maxSubarraySum([])).toBe(0);
  });
});
