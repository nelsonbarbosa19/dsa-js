// 07-intervals/2_insertInterval.template.js

/**
 * Template: Insert Interval
 * Quando usar: Inserir um intervalo e fazer merge com sobrepostos.
 * Notas: Percorrer intervalos, adicionar antes, merge, depois.
 * Complexidade:
 * - Tempo: O(n), percorremos todos os intervalos.
 * - Espaço: O(n), para o resultado.
 * Exemplos:
 * - Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 *   Output: [[1,5],[6,9]]
 * - Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 *   Output: [[1,2],[3,10],[12,16]]
 */

function insertInterval(intervals, newInterval) {
  let result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  result.push(newInterval);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
