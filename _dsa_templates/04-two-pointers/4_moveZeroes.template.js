// 04-two-pointers/4_moveZeroes.template.js

/**
 * Template: Two Pointers para mover zeros para o fim do array
 * Quando usar: Quando precisamos reorganizar in-place preservando a ordem dos não-zeros.
 * Notas: Similar ao partition, mas preserva ordem relativa dos números diferentes de zero.
 * Complexidade:
 * - Tempo: O(n), porque percorremos o array uma vez.
 * - Espaço: O(1), porque modificamos in-place.
 * Exemplos:
 *   Input: [0, 1, 0, 3, 12]
 *   Output: [1, 3, 12, 0, 0]
 */

function moveZeroes(nums) {
  let insertPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }

  return nums;
}
