// 15-dynamic-programming-1d/1_climbingStairs.template.js

/**
 * Template: Climbing Stairs (DP - 1D, estilo Fibonacci)
 * Quando usar: Problemas em que tens de contar o número de formas de chegar a um estado,
 *              onde cada estado depende de escolhas anteriores (ex: subir 1 ou 2 degraus).
 * Notas:
 * - O problema pede: "Dado um número de degraus n, quantas formas diferentes existem de
 *   subir até ao topo, sabendo que podes subir 1 ou 2 degraus de cada vez?"
 * - É equivalente a calcular a sequência de Fibonacci até n.
 * - Padrão clássico para perceber DP em entrevistas.
 * Complexidade:
 * - Tempo: O(n), porque percorres todos os degraus até n.
 * - Espaço: O(1), porque basta manter as últimas duas soluções.
 * Exemplos:
 * - Input: n = 2 → Output: 2 (formas: [1+1], [2])
 * - Input: n = 3 → Output: 3 (formas: [1+1+1], [1+2], [2+1])
 */

function climbStairs(n) {
  if (n <= 2) return n;

  let prev1 = 1;
  let prev2 = 2;

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}
