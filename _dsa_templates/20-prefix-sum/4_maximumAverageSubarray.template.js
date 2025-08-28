// 20-prefix-sum/4_maximumAverageSubarray.template.js

/**
 * Template: Maximum Average Subarray (Prefix Sum), size K -> Sliding Window é melhor nestes casos.
 *
 * Quando usar: Encontrar subarray de tamanho fixo com média máxima
 * Notas:
 * - Calcula prefix sum
 * - Soma de subarray [i..j] = prefix[j+1] - prefix[i]
 * - Atualiza maxAvg durante iteração
 * Complexidade:
 * - Tempo: O(n), percorre o array
 * - Espaço: O(n), armazena prefixSum (pode otimizar para O(1))
 * Exemplos:
 * - Input: [1,12,-5,-6,50,3], k=4 → Output: 12.75
 */

function maximumAverageSubarray(nums, k) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  let maxAvg = -Infinity;

  for (let i = 0; i <= n - k; i++) {
    const sum = prefix[i + k] - prefix[i];
    maxAvg = Math.max(maxAvg, sum / k);
  }

  return maxAvg;
}
