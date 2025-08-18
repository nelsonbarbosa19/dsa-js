// 04-two-pointers/1_twoSumSorted.template.js

/**
 * Template: Two Pointers para encontrar dois números que somam um alvo num array ordenado
 * Quando usar: Quando o array já está ordenado e precisamos de encontrar um par com soma target.
 * Notas: Muito usado em entrevistas, aproveita o facto de estar ordenado para mover left e right.
 * Complexidade:
 * - Tempo: O(n), porque percorremos o array no máximo uma vez.
 * - Espaço: O(1), porque só usamos dois ponteiros.
 * Exemplos:
 *   Input: nums = [1, 2, 4, 7, 11, 15], target = 15
 *   Output: [4, 11]
 */

function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [nums[left], nums[right]];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
