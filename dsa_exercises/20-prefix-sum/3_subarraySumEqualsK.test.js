// 20-prefix-sum/1_subarraySumEqualsK.test.js

/**
 * Exercício: Subarray Sum Equals K
 *
 * Dado um array de inteiros nums e um inteiro k,
 * retorna o número total de subarrays continuos cuja soma é igual a k.
 *
 * Exemplo:
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 * Explicação:
 *   Os subarrays [1,1] (primeiros dois elementos) e [1,1] (últimos dois elementos)
 *   têm soma igual a 2.
 *
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 * Explicação:
 *   Os subarrays [1,2] e [3] têm soma igual a 3.
 *
 * Dica:
 *   - Usa Prefix Sum + HashMap para guardar quantas vezes um prefixo já apareceu.
 *   - Complexidade esperada: O(n).
 */

function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const map = new Map();

  map.set(0, 1);

  for (let num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

// Tests
describe("Subarray Sum Equals K", () => {
  test("Exemplo 1: [1,1,1], k=2 → 2 subarrays", () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2);
  });

  test("Exemplo 2: [1,2,3], k=3 → 2 subarrays", () => {
    expect(subarraySum([1, 2, 3], 3)).toBe(2);
  });

  test("Caso com negativos: [1, -1, 0], k=0 → 3 subarrays", () => {
    expect(subarraySum([1, -1, 0], 0)).toBe(3);
  });

  test("Array maior: [3,4,7,2,-3,1,4,2], k=7 → 4 subarrays", () => {
    expect(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)).toBe(4);
  });

  test("Nenhum subarray válido", () => {
    expect(subarraySum([1, 2, 3], 7)).toBe(0);
  });

  test("Array vazio", () => {
    expect(subarraySum([], 0)).toBe(0);
  });
});
