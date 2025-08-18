// 05-sliding-window/1_fixedWindowMaxSum.template.js

/**
 * Template: Sliding Window de tamanho fixo - Soma Máxima
 * Quando usar: Quando precisas encontrar a soma máxima de qualquer subarray
 *              de tamanho fixo k.
 * Notas:
 * - Útil em problemas como "max sum subarray of size k".
 * - Evita recalcular a soma de todo o subarray a cada passo, movendo a janela.
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(1)
 */

function fixedWindowMaxSum(nums, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

module.exports = fixedWindowMaxSum;
