// 01-arrays/1_twoSum.template.js

/**
 * Template: Two Sum
 * Quando usar: Encontrar dois números que somam um alvo, útil em problemas de soma ou pares.
 * Notas: Use HashMap para armazenar os valores e procurar o complemento.
 * Complexidade:
 * - Tempo: O(n), porque percorremos a array uma vez.
 * - Espaço: O(n), porque armazenamos cada elemento no mapa.
 * Exemplos:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 */

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}
