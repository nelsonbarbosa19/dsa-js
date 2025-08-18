// 01-arrays/5_productExceptSelf.template.js

/**
 * Template: Product of Array Except Self
 * Quando usar: Calcular produto de todos os elementos exceto o atual sem usar divisão.
 * Notas: Use arrays auxiliares para produtos à esquerda e à direita, ou faça em O(1) espaço extra.
 * Complexidade:
 * - Tempo: O(n), percorremos o array algumas vezes.
 * - Espaço: O(1) (desconsiderando o array de saída).
 * Exemplos:
 * Input: [1,2,3,4]
 * Output: [24,12,8,6]
 */

function productExceptSelf(nums) {
  const res = Array(nums.length).fill(1);
  let left = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
}
