// 5_twoSumUnique.test.js

/**
 * Exercício: Two Sum Unique
 * Descrição: Dado um array de inteiros nums e um inteiro target, retorna todas as combinações únicas de dois números que somam exatamente target.
 * Notas: Cada combinação deve aparecer apenas uma vez, independente da ordem dos elementos. Os números repetidos no array não geram duplicação no resultado.
 * Exemplos:
 * - Input: [2, 7, 11, 15], target=9 → Output: [[2,7]]
 * - Input: [3, 3, 4, 2], target=6 → Output: [[3,3],[4,2]]
 * - Input: [3, 4, 3, 2], target=6 → Output: [[3,3],[4,2]]
 */

function twoSumUnique(nums, target) {
  const set = new Set();
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (set.has(diff)) {
      res.push([diff, nums[i]]);
      set.delete(diff);
    } else {
      set.add(nums[i], i);
    }
  }

  return res;
}

describe("twoSumUnique", () => {
  test("Exemplo 1", () => {
    expect(twoSumUnique([2, 7, 11, 15], 9)).toEqual([[2, 7]]);
  });

  test("Exemplo 2", () => {
    expect(twoSumUnique([3, 3, 4, 2], 6)).toEqual([
      [3, 3],
      [4, 2],
    ]);
  });

  test("Exemplo 3", () => {
    expect(twoSumUnique([3, 4, 3, 2, 4, 2, 4], 6)).toEqual([
      [3, 3],
      [4, 2],
      [4, 2],
    ]);
  });

  test("Array vazio", () => {
    expect(twoSumUnique([], 5)).toEqual([]);
  });

  test("Sem combinações possíveis", () => {
    expect(twoSumUnique([1, 2, 3], 7)).toEqual([]);
  });

  test("Repetições ignoradas", () => {
    expect(twoSumUnique([1, 1, 2, 2], 3)).toEqual([[1, 2]]);
  });
});
