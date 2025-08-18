// 04-two-pointers/3_isPalindrome.template.js

/**
 * Template: Two Pointers para verificar se uma string é um palíndromo
 * Quando usar: Para verificar se uma string lida de frente e de trás é igual.
 * Notas: Muitas vezes combinado com regex para ignorar caracteres especiais e case-insensitive.
 * Complexidade:
 * - Tempo: O(n), porque percorremos no máximo toda a string.
 * - Espaço: O(1), porque só usamos ponteiros.
 * Exemplos:
 *   Input: "A man, a plan, a canal: Panama"
 *   Output: true
 */

function isPalindrome(s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
