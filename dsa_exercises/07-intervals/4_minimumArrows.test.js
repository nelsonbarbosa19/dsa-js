// 452. Minimum Number of Arrows to Burst Balloons
// Enunciado (resumo):
//   Dado um array 'points' onde cada elemento é um intervalo [x_start, x_end]
//   representando a horizontal onde um balão existe. Uma seta disparada num ponto x
//   rebenta todos os balões cujo intervalo contém x. Devolve o número mínimo de setas
//   necessárias para rebentar todos os balões.
//
// Abordagem ótima (greedy):
//   - Ordenar por x_end crescente e disparar no fim do balão atual;
//   - Sempre que o próximo balão começa depois do ponto da última seta (start > currEnd),
//     precisamos de uma nova seta.
//   - Complexidade: O(n log n) no tempo, O(1) extra.
//
// ------------------------------------------------------------

function findMinArrowShots(points) {
  if (!points?.length) return 0;

  points.sort((a, b) => a[1] - b[1]);

  let arrowsCount = 1;
  let currPoint = points[0];

  for (let i = 1; i < points.length; i++) {
    const point = points[i];

    if (point[0] > currPoint[1]) {
      arrowsCount++;
      currPoint = points[i];
    }
  }

  return arrowsCount;
}

// ------------------------------------------------------------
// Casos exemplo (inputs/outputs esperados):
const examples = [
  {
    points: [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ],
    expected: 2,
    desc: "overlaps densos → 2 setas bastam",
  },
  {
    points: [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
    expected: 4,
    desc: "sem overlap → uma seta por balão",
  },
  {
    points: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ],
    expected: 2,
    desc: "toque na borda partilha seta (start == currEnd)",
  },
  {
    points: [
      [1, 10],
      [2, 3],
      [4, 5],
    ],
    expected: 2,
    desc: "um intervalo grande engole vários; mas [2,3] e [4,5] não se cruzam",
  },
  {
    points: [],
    expected: 0,
    desc: "vazio",
  },
];

// ------------------------------------------------------------
// Testes Jest
describe("452. Minimum Number of Arrows to Burst Balloons", () => {
  test.each(examples)("Exemplo: $desc", ({ points, expected }) => {
    const got = findMinArrowShots(points.map((p) => p.slice())); // copia para não mutar o literal
    expect(got).toBe(expected);
  });

  test("Aleatório simples: todos iguais", () => {
    const pts = Array.from({ length: 5 }, () => [1, 5]);
    expect(findMinArrowShots(pts)).toBe(1);
  });

  test("Grandes valores e ordem já ordenada", () => {
    const pts = [
      [-1000000000, 0],
      [0, 1000000000],
      [1, 2],
    ];
    expect(findMinArrowShots(pts)).toBe(2);
  });
});
