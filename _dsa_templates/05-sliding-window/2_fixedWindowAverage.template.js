// 05-sliding-window/2_fixedWindowAverage.template.js

/**
 * Template: Sliding Window de tamanho fixo - Média
 * Quando usar: Quando precisas calcular a média de todos os subarrays
 *              de tamanho fixo k.
 * Notas:
 * - Similar ao template de soma, mas dividindo por k.
 * - Evita cálculos repetidos com deslocamento incremental.
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(1)
 */

function fixedWindowAverage(nums, k) {
  let result = [];
  let windowSum = 0;

  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];

    if (i >= k - 1) {
      result.push(windowSum / k);
      windowSum -= nums[i - k + 1];
    }
  }

  return result;
}

module.exports = fixedWindowAverage;
