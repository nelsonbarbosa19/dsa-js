// 03-hash-table/1_frequencyCounter.template.js

/**
 * Template: Frequency Counter
 * Quando usar: Quando for necessário contar quantas vezes cada elemento aparece.
 * Notas: Pode ser usado para strings, arrays ou outros iteráveis.
 * Complexidade:
 * - Tempo: O(n)
 * - Espaço: O(n)
 */

function frequencyCounter(arr) {
  const freq = new Map();

  for (const el of arr) {
    freq.set(el, (freq.get(el) || 0) + 1);
  }

  return freq;
}

module.exports = frequencyCounter;
