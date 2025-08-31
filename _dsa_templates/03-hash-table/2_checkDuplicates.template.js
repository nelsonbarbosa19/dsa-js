// 03-hash-table/2_checkDuplicates.template.js

/**
 * Template: Check Duplicates
 * Quando usar: Para verificar rapidamente se existem valores duplicados.
 * Notas: Pode ser adaptado para devolver quais são os duplicados.
 * Complexidade:
 * - Tempo O(n)
 * - Espaço O(n)
 */

function checkDuplicates(arr) {
  const seen = new Set();

  for (const el of arr) {
    if (seen.has(el)) return true;

    seen.add(el);
  }

  return false;
}
