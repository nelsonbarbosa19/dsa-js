// 15-dynamic-programming-1d/1_fibonacciDP.template.js

/**
 * Dynamic Programming 1D:
 *
 * Quando falamos em Dynamic Programming (DP), estamos a falar de resolver problemas através de dividir em
 * subproblemas e guardar os resultados intermédios (memoization ou tabulation), evitando recomputações.
 * Porquê 1D?
 * Chama-se Dynamic Programming 1D quando conseguimos representar a solução de cada subproblema apenas numa dimensão
 * (um array ou até duas variáveis).
 * Ou seja:
 * Cada posição i depende apenas de resultados anteriores (ex: i-1, i-2).
 * Não precisamos de uma matriz ou grid (2D), basta um array linear ou mesmo duas variáveis para guardar o estado.
 */

/**
 *
 * Bottom-Up Tabulation significa resolver do caso mais pequeno até ao maior, guardando resultados intermédios numa tabela (array).
 * Para Fibonacci:
 *  Base: dp[0] = 0, dp[1] = 1
 * Depois, para cada i:
 *  dp[i] = dp[i-1] + dp[i-2]
 *
 * Vantagens sobre Recursão “pura”:
 *  A recursão simples do Fibonacci recalcula os mesmos valores muitas vezes → O(2^n) (muito ineficiente).
 *  A tabulação calcula cada valor uma única vez → O(n).
 */

/**
 * Template: Fibonacci com DP (bottom-up tabulation)
 * Quando usar: Problemas de recorrência simples (ex.: n-ésimo número Fibonacci).
 * Notas: Melhor que recursão pura (evita recomputação).
 * Complexidade:
 * - Tempo: O(n), porque percorremos os valores até n.
 * - Espaço: O(1), porque só guardamos os dois últimos valores.
 * Exemplos:
 * - Input: n = 5 → Output: 5
 * - Input: n = 10 → Output: 55
 */

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}
