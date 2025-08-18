// 03-hash-table/3_twoSumHashMap.template.js

/**
 * Template: Two Sum (Hash Map)
 * Quando usar: Encontrar rapidamente dois números que somam um alvo.
 * Notas: Evita O(n²) usando um hash map para procurar complementos.
 * Complexidade:
 * - Tempo O(n)
 * - Espaço O(n)
 */

function twoSumHashMap(nums, target) {
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

module.exports = twoSumHashMap;
