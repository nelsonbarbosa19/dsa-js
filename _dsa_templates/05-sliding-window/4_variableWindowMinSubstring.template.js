// 05-sliding-window/4_variableWindowMinSubstring.template.js

/**
 * Template: Sliding Window de tamanho variável - Menor substring contendo todos os caracteres
 * Quando usar: Quando precisas encontrar a substring mínima que contém
 *              um conjunto de caracteres ou satisfaz uma condição.
 * Notas:
 * - Usa dois ponteiros e um contador de frequência.
 * - Muito usado em problemas tipo "minimum window substring".
 * Complexidade:
 * - Tempo: O(n + m)
 * - Espaço: O(n + m), onde m é o tamanho do padrão.
 */

function variableWindowMinSubstring(s, t) {
  if (t.length > s.length) return "";

  const needMap = {};

  for (let c of t) {
    needMap[c] = (needMap[c] || 0) + 1;
  }

  let haveCount = 0;
  let needCount = Object.keys(needMap).length;
  let left = 0;
  let minLen = Infinity;
  let start = 0;
  const freqMap = {};

  for (let right = 0; right < s.length; right++) {
    let c = s[right];
    freqMap[c] = (freqMap[c] || 0) + 1;

    if (needMap[c] && freqMap[c] === needMap[c]) {
      haveCount++;
    }

    while (haveCount === needCount) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      let lc = s[left];
      freqMap[lc]--;

      if (needMap[lc] && freqMap[lc] < needMap[lc]) {
        haveCount--;
      }

      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
