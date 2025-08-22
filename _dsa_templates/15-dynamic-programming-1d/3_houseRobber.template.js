// 15-dynamic-programming-1d/2_houseRobber.template.js

/**
 * Template: House Robber (DP - 1D com decisão ótima por estado)
 * Quando usar: Problemas em que precisas maximizar uma soma mas não podes escolher
 *              elementos adjacentes (restrições de escolha).
 * Notas:
 * - O problema pede: "Dada uma lista de casas com valores em dinheiro,
 *   não podes roubar duas casas adjacentes. Qual o valor máximo que podes roubar?"
 * - Em cada casa decides: roubar (valor atual + dp[i-2]) ou não roubar (dp[i-1]).
 * - Este é um dos problemas mais clássicos de DP e costuma sair em entrevistas.
 * Complexidade:
 * - Tempo: O(n), porque percorres todas as casas.
 * - Espaço: O(1), porque basta manter as últimas duas soluções.
 * Exemplos:
 * - Input: nums = [1, 2, 3, 1] → Output: 4 (roubar casas 1 e 3)
 * - Input: nums = [2, 7, 9, 3, 1] → Output: 12 (roubar casas 2 e 3 e 5)
 */

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev1 = Math.max(nums[0], nums[1]);
  let prev2 = nums[0];

  for (let i = 2; i < nums.length; i++) {
    let current = Math.max(nums[i] + prev2, prev1);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
