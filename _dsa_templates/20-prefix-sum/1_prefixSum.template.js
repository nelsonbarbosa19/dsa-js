// 20-prefix-sum/1_prefixSum.template.js

/**
 * Template: Prefix Sum + Range Sum Query
 * Quando usar:
 * - Calcular rapidamente a soma cumulativa de um array.
 * - Responder a múltiplas queries de soma de subarray.
 * Notas:
 * - Cria um array prefixSum onde prefixSum[i] = nums[0] + ... + nums[i-1].
 * - Soma de subarray [i..j] = prefixSum[j+1] - prefixSum[i]
 * - Permite consultas O(1) após pré-processamento.
 * Complexidade:
 * - Tempo: O(n) para pré-processamento, O(1) por query
 * - Espaço: O(n), armazena prefixSum
 * Exemplos:
 * - Input: nums = [1,2,3,4], sumRange(1,3) → Output: 2+3+4=9
 * - Input: nums = [3,1,2,5], sumRange(0,2) → Output: 3+1+2=6
 */

function createPrefixSum(nums) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  return prefix;
}

// Função para consulta de soma de subarray [i..j]
function sumRange(prefix, i, j) {
  return prefix[j + 1] - prefix[i];
}

// Exemplo de uso
let nums = [2, 3, 5, 1, 6];
let prefix = createPrefixSum(nums);

console.log(prefix); // [2, 5, 10, 11, 17]
console.log(sumRange(prefix, 1, 3)); // 9
