// 07-intervals/1_mergeIntervals.template.js

/**
 * Template: Merge Intervals
 * Quando usar: Problemas de sobreposição de intervalos.
 * Notas: Ordenar os intervalos por início, depois fazer merge.
 * Complexidade:
 * - Tempo: O(n log n), por causa do sort.
 * - Espaço: O(n), para o array de output.
 * Exemplos:
 * - Input: [[1,3],[2,6],[8,10],[15,18]] → Output: [[1,6],[8,10],[15,18]]
 * - Input: [[1,4],[4,5]] → Output: [[1,5]]
 */

function mergeIntervals(intervals) {
  if (intervals.length === 0) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [];
  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let next = intervals[i];

    if (next[0] <= current[1]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      merged.push(current);
      current = next;
    }
  }

  merged.push(current);

  return merged;
}
