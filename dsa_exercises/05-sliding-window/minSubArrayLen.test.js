// 05-sliding-window/minSubArrayLen.test.js

/**
 * Problema:
 * Dado um array de inteiros positivos nums e um inteiro target,
 * retorna o tamanho mínimo de um subarray cuja soma seja >= target.
 * Se não existir tal subarray, retorna 0.
 *
 * Exemplo:
 * Input: target = 7, nums = [2,3,1,2,4,3] → Output: 2 (subarray [4,3])
 */

function minSubArrayLen(target, nums) {
  let left = 0;
  let currentSum = 0;
  let minSize = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minSize = Math.min(minSize, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minSize === Infinity ? 0 : minSize;
}

// -------------------------
// Testes com Jest
// -------------------------

test("minSubArrayLen - casos básicos", () => {
  expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2); // [4,3]
  expect(minSubArrayLen(4, [1, 4, 4])).toBe(1); // [4]
  expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
});

test("minSubArrayLen - casos extra", () => {
  expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toBe(5); // [1,2,3,4,5]
  expect(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8])).toBe(2); // [10,7]
});
