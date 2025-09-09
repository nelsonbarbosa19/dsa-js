// 252. Meeting Rooms I
// Enunciado (resumo):
//   Dado um array de intervalos [start, end] representando reuniões,
//   retorna true se for possível participar em todas (i.e., não há sobreposição).
//   Considera-se que end == start NÃO sobrepõe (intervalos semifechados [start, end)).
//
// Abordagem:
//   - Ordenar por start crescente.
//   - Verificar se algum intervalo começa antes do fim do anterior (prev.end > curr.start).
//   - Complexidade: O(n log n) (sort) + O(n) varrimento; espaço O(1) extra.
//
// ------------------------------------------------------------

function canAttendMeetings(intervals) {
  if (!intervals || intervals.length <= 1) return true;

  intervals = [...intervals].sort((a, b) => a[0] - b[0]); // copia para não mutar input

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] > intervals[i][0]) {
      return false; // sobreposição estrita
    }
  }

  return true;
}

// ------------------------------------------------------------
// Casos exemplo (inputs/outputs esperados):
const examples = [
  {
    intervals: [
      [0, 30],
      [5, 10],
      [15, 20],
    ],
    expected: false,
    desc: "há sobreposição: [0,30] com [5,10] e [15,20]",
  },
  {
    intervals: [
      [7, 10],
      [2, 4],
    ],
    expected: true,
    desc: "sem sobreposição",
  },
  {
    intervals: [
      [1, 3],
      [3, 6],
    ],
    expected: true,
    desc: "toque na borda (end == start) não sobrepõe",
  },
  {
    intervals: [[1, 5]],
    expected: true,
    desc: "apenas uma reunião",
  },
  {
    intervals: [],
    expected: true,
    desc: "lista vazia",
  },
];

// ------------------------------------------------------------
// Testes Jest
describe("252. Meeting Rooms I", () => {
  test.each(examples)("Exemplo: $desc", ({ intervals, expected }) => {
    const got = canAttendMeetings(intervals);
    expect(got).toBe(expected);
  });

  test("Múltiplos intervalos ordenados e não ordenados", () => {
    const a = [
      [5, 6],
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    expect(canAttendMeetings(a)).toBe(true);
    const b = [
      [1, 4],
      [2, 3],
      [3, 5],
    ];
    expect(canAttendMeetings(b)).toBe(false);
  });

  test("Grandes valores e bordas", () => {
    const intervals = [
      [-1000000000, 0],
      [0, 1],
      [1, 2],
      [2, 3],
    ];
    expect(canAttendMeetings(intervals)).toBe(true);
  });
});
