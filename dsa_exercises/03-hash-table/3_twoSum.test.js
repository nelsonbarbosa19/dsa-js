// 3_twoSum.test.js

/**
 * Enunciado:
 * Dado um array de inteiros nums e um inteiro target, retorna os índices
 * de dois números de forma que a soma deles seja igual a target.
 *
 * Podes assumir que cada input terá exatamente uma solução,
 * e não podes usar o mesmo elemento duas vezes.
 *
 * Exemplos:
 * - Input: nums = [2,7,11,15], target = 9 → Output: [0,1]
 * - Input: nums = [3,2,4], target = 6 → Output: [1,2]
 * - Input: nums = [3,3], target = 6 → Output: [0,1]
 *
 * Notas:
 * - Deves devolver a resposta em qualquer ordem.
 * - Resolver em O(n) tempo é o desafio ideal.
 */

function twoSum(nums, target) {
  if (!nums?.length) {
    return [];
  }

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}

describe("Two Sum", () => {
  test("Exemplo clássico", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("Caso com elementos repetidos", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("Outro caso", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
