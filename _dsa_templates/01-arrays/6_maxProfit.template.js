// 01-arrays/6_maxProfit.template.js

/**
 * Template: Best Time to Buy and Sell Stock
 * Quando usar: Encontrar a maior diferença entre preços em uma sequência (comprar baixo, vender alto).
 * Notas: Use um mínimo local e atualize o lucro máximo enquanto percorre.
 * Complexidade:
 * - Tempo: O(n), percorremos a array uma vez.
 * - Espaço: O(1), apenas duas variáveis.
 * Exemplos:
 * Input: [7,1,5,3,6,4]
 * Output: 5 (buy at 1, sell at 6)
 */

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }

    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}
