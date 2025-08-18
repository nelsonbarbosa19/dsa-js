/**
 * Problema: https://leetcode.com/problems/two-sum/
 * Dificuldade: Easy
 * Categoria: Arrays
 *
 * Descrição:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 *
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 *
 */

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diffValue = target - nums[i];
    if (map[diffValue] !== undefined) {
      return [map[diffValue], i];
    }
    map[nums[i]] = i;
  }
}

test("twoSum returns correct indices", () => {
  expect(twoSum([2, 7, 11, 15], 9).sort()).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6).sort()).toEqual([1, 2]);
  expect(twoSum([3, 3], 6).sort()).toEqual([0, 1]);
});

module.exports = twoSum;

/**
 * Notas:
 *    - Num Objeto as keys sao sempre strings ou symbols, na estrutura Map as keys podem ser de outros tipos.
 *    - Usamos map quando queremos percorrer a lista uma só vez, e fazer subtração com as anteriores (ou soma).
 *
 *
 *
 */
