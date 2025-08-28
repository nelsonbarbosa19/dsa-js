// 20-prefix-sum/3_subarraySumEqualsK.template.js

/**
 * Template: Subarray Sum Equals K (Prefix Sum + HashMap)
 * Quando usar: Contar subarrays cuja soma seja igual a k
 * Notas:
 * - Mantém currentSum acumulado
 * - Usa um Map para contar quantas vezes cada soma já apareceu
 * - Incrementa resultado com count[currentSum - k]
 * Complexidade:
 * - Tempo: O(n), percorre o array uma vez
 * - Espaço: O(n), para armazenar o Map
 * Exemplos:
 * - Input: [1,1,1], k=2 → Output: 2
 */

function subarraySum(nums, k) {
  let currentSum = 0;
  let result = 0;
  let countMap = new Map();
  countMap.set(0, 1);

  for (let num of nums) {
    currentSum += num;

    if (countMap.has(currentSum - k)) {
      result += countMap.get(currentSum - k);
    }

    countMap.set(currentSum, (countMap.get(currentSum) || 0) + 1);
  }

  return result;
}
