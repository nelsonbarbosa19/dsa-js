// 20-prefix-sum/2_prefixSuffixAccumulation.template.js

/**
 * Template: Prefix + Suffix Accumulation
 * Quando usar: Quando precisas de calcular um valor acumulado em cada posição,
 * excluindo o elemento atual (ex: produto ou soma de todos menos nums[i]).
 * Notas: Calcula-se prefix[i] (acumulação até antes de i) e suffix[i] (acumulação depois de i).
 * Complexidade:
 * - Tempo: O(n), percorremos o array 2x.
 * - Espaço: O(n), se usarmos arrays prefix e suffix.
 * Exemplos:
 * - Input: [1,2,3,4] → Output: [24,12,8,6]
 */

function productExceptSelf(nums) {
  let n = nums.length;

  let prefix = new Array(n);
  let suffix = new Array(n);
  let result = new Array(n);

  prefix[0] = 1;
  suffix[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
}

// Exemplo de uso
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
