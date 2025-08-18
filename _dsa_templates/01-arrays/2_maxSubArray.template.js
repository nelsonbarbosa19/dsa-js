// 01-arrays/2_maxSubArray.template.js

/**
 * Template: Maximum Subarray (Kadane's Algorithm)
 * Quando usar: Encontrar subarray contíguo com soma máxima.
 * Notas: Mantém a soma atual e o máximo global, redefinindo quando a soma atual é negativa.
 * Complexidade:
 * - Tempo: O(n), percorremos o array uma vez.
 * - Espaço: O(1), apenas duas variáveis são usadas.
 * Exemplos:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6 ([4,-1,2,1])
 */

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}
