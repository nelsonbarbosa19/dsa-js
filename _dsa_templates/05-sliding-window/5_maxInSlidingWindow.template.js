// 05-sliding-window/5_maxInSlidingWindow.template.js

/**
 * Template: Sliding Window - Máximo em cada janela
 * Quando usar: Quando precisas do valor máximo (ou mínimo) de cada
 *              subarray de tamanho fixo.
 * Notas:
 * - Usa deque para manter valores úteis em ordem decrescente.
 * - Muito usado em problemas de performance em streaming de dados.
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(k)
 */

function maxInSlidingWindow(nums, k) {
  let result = [];
  let deque = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length && deque[0] <= i - k) deque.shift();

    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
