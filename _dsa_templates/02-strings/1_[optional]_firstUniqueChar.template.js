// 02-strings/1_firstUniqueChar.template.js

/**
 * Template: First Unique Character
 * Quando usar: Encontrar o primeiro caractere não repetido, útil em parsing ou detecção de padrão.
 * Notas: Use um HashMap para contar frequências e depois percorra a string.
 * Complexidade:
 * - Tempo: O(n), duas passagens: contar + verificar.
 * - Espaço: O(n), para armazenar a frequência de cada caractere.
 * Exemplos:
 * Input: "leetcode"
 * Output: 0 ('l')
 */

function firstUniqChar(s) {
  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) === 1) return i;
  }

  return -1;
}
