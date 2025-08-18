// 02-strings/1_reverseString.template.js

/**
 * Template: Reverse String
 * Quando usar: Inverter strings ou arrays de caracteres, útil para problemas de palíndromo ou manipulação in-place.
 * Notas: Pode usar 2 ponteiros, trocando caracteres nas extremidades.
 * Complexidade:
 * - Tempo: O(n), porque percorremos todos os caracteres uma vez.
 * - Espaço: O(1), porque fazemos swaps in-place.
 * Exemplos:
 * Input: "hello"
 * Output: "olleh"
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
