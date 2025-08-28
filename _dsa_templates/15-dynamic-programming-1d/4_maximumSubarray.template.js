// 15-dynamic-programming-1d/4_maximumSubarray.template.js

/**
 * Template: Maximum Subarray (Kadane's Algorithm)
 *
 * - É feito especificamente para encontrar a soma máxima de subarray contíguo.
 * - Trabalha somente com a soma, não importa quais elementos estão dentro do subarray.
 * - Sliding Window:
 *   - Também pode ser usada para subarrays ou substrings que maximizam alguma medida,
 *     inclusive soma, mas com algumas condições extras.
 *   - É mais flexível para restrições: soma ≤ k, comprimento máximo, elementos distintos, etc.
 *
 * Quando usar: Encontrar a soma máxima de uma subarray contínua num array de inteiros.
 * Padrão: Dynamic Programming 1D (bottom-up), mantendo "local max" e "global max".
 *
 * Intuição:
 * - Para cada posição i, decidimos se é melhor:
 *   (a) começar nova subarray em nums[i]
 *   (b) continuar a subarray anterior adicionando nums[i]
 *
 * - currentSum guarda o máximo local até ao índice i
 * - maxSum guarda o melhor resultado global
 *
 * Complexidade:
 * - Tempo: O(n), percorre o array uma vez.
 * - Espaço: O(1), apenas variáveis auxiliares.
 *
 * Exemplos:
 * - Input: [-2,1,-3,4,-1,2,1,-5,4] → Output: 6   (subarray [4,-1,2,1])
 * - Input: [1] → Output: 1
 * - Input: [5,4,-1,7,8] → Output: 23
 */

function maximumSubarray(nums) {
  if (!nums?.length) return 0;

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Decide se continua ou reinicia subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maximumSubarray;
