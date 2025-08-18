// 04-two-pointers/2_reverseString.template.js

/**
 * Template: Two Pointers para inverter uma string (ou array de chars)
 * Quando usar: Quando precisarmos inverter in-place sem usar espaço extra.
 * Notas: Importante em problemas de manipulação de strings e arrays.
 * Complexidade:
 * - Tempo: O(n), porque percorremos metade do array.
 * - Espaço: O(1), porque apenas trocamos elementos in-place.
 * Exemplos:
 *   Input: ["h", "e", "l", "l", "o"]
 *   Output: ["o", "l", "l", "e", "h"]
 */

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  return s;
}
