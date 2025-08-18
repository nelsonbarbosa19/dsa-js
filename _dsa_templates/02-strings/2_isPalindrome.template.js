// 02-strings/2_isPalindrome.template.js

/**
 * Template: Check Palindrome
 * Quando usar: Verificar se uma string é simétrica, ignorando cases ou caracteres especiais.
 * Notas: Use 2 ponteiros do início e fim, comparando até o meio.
 * Complexidade:
 * - Tempo: O(n), porque percorremos metade da string.
 * - Espaço: O(1), sem armazenamento extra além de variáveis.
 * Exemplos:
 * Input: "racecar"
 * Output: true
 */

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNum(c) {
  return /[a-z0-9]/i.test(c);
}
