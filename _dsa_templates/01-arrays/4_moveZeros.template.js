// 01-arrays/4_moveZeros.template.js

/**
 * Template: Move Zeros
 * Quando usar: Mover todos os zeros para o fim, mantendo a ordem relativa dos elementos não-zero.
 * Notas: Use dois ponteiros: um para percorrer e outro para posicionar o próximo elemento não-zero.
 * Complexidade:
 * - Tempo: O(n), percorremos a array uma vez.
 * - Espaço: O(1), fazemos swaps in-place.
 * Exemplos:
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */

function moveZeros(nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[lastNonZero];

      nums[lastNonZero] = nums[i];
      nums[i] = temp;

      lastNonZero++;
    }
  }
}
