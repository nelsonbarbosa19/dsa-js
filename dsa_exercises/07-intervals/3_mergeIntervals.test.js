// 3_mergeIntervals.test.js

/**
 * Exercício: Merge Intervals
 *
 * Descrição:
 * Dada uma lista de intervalos, mescla todos os intervalos sobrepostos
 * e retorna uma lista de intervalos não sobrepostos que cobrem todos os intervalos originais.
 *
 * Input / Output:
 * - Input: [[1,3],[2,6],[8,10],[15,18]] → Output: [[1,6],[8,10],[15,18]]
 * - Input: [[1,4],[4,5]] → Output: [[1,5]]
 *
 * Notas:
 * - Muito comum em entrevistas.
 * - Ordena os intervalos pelo início e compara o fim para mesclar.
 */

function mergeIntervals(intervals) {
  const res = [];

  // // Ordena pelo início
  // intervals.sort((a, b) => a[0] - b[0]);

  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (current[1] >= intervals[i][0]) {
      current[1] = Math.max(current[1], intervals[i][1]);
    } else {
      res.push(current);
      current = intervals[i];
    }
  }

  res.push(current);
  return res;
}

describe("Merge Intervals", () => {
  test("Exemplo 1: sobreposição múltipla", () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  test("Exemplo 2: intervalos encostados", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [4, 5],
      ])
    ).toEqual([[1, 5]]);
  });

  test("Sem sobreposição", () => {
    expect(
      mergeIntervals([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("Intervalo único", () => {
    expect(mergeIntervals([[1, 10]])).toEqual([[1, 10]]);
  });

  test("Array vazio", () => {
    expect(mergeIntervals([])).toEqual([]);
  });
});
