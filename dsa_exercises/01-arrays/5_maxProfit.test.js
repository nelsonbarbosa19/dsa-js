// 05-arrays/5_maxProfit.test.js

/**
 * 📝 Exercício: Best Time to Buy and Sell Stock
 *
 * Dado um array `prices` onde `prices[i]` representa o preço de uma ação no dia `i`,
 * determina o lucro máximo que podes obter escolhendo **um único dia para comprar**
 * e **um único dia no futuro para vender**.
 *
 * ❌ Não podes vender antes de comprar.
 *
 * ---
 * Exemplos:
 *
 * Input: prices = [7, 1, 5, 3, 6, 4]
 * Output: 5
 * Explicação: Compra no dia 2 (preço = 1) e vende no dia 5 (preço = 6), lucro = 6-1 = 5.
 *
 * Input: prices = [7, 6, 4, 3, 1]
 * Output: 0
 * Explicação: Nenhuma transação possível com lucro → retorna 0.
 *
 * ---
 * 💡 Dica: Mantém o preço mínimo visto até ao momento e calcula a diferença com o preço atual.
 */

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}

describe("Best Time to Buy and Sell Stock", () => {
  test("Exemplo clássico", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test("Array decrescente → sem lucro possível", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test("Array com apenas um elemento", () => {
    expect(maxProfit([5])).toBe(0);
  });

  test("Array com preços iguais", () => {
    expect(maxProfit([3, 3, 3, 3])).toBe(0);
  });

  test("Lucro máximo no início e no fim", () => {
    expect(maxProfit([1, 2, 90, 10, 110])).toBe(109);
  });
});
