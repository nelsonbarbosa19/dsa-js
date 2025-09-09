// 986. Interval List Intersections
// Enunciado (resumo):
//   Dadas duas listas A e B de intervalos fechados [start, end], cada lista
//   é não sobreposta e está ordenada por start. Devolve a lista das interseções
//   (também como intervalos fechados).
//
// Abordagem de dois ponteiros (O(m+n)):
//   - Manter i e j para A e B;
//   - A interseção de [aStart,aEnd] e [bStart,bEnd] é:
//       lo = max(aStart, bStart), hi = min(aEnd, bEnd)
//     Se lo <= hi → há interseção;
//   - Avançar quem termina primeiro (aEnd < bEnd ? i++ : j++).
//
// ------------------------------------------------------------

function intervalIntersection(firstList, secondList) {
  let indexA = 0;
  let indexB = 0;
  const res = [];

  while (indexA < firstList.length && indexB < secondList.length) {
    const [startA, endA] = firstList[indexA];
    const [startB, endB] = secondList[indexB];

    const startMax = Math.max(startA, startB);
    const endMin = Math.min(endA, endB);

    if (startMax <= endMin) {
      res.push([startMax, endMin]);
    }

    if (endA < endB) {
      indexA++;
    } else {
      indexB++;
    }
  }

  return res;
}

// ------------------------------------------------------------
// Casos exemplo (inputs/outputs esperados):
const examples = [
  {
    A: [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    B: [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ],
    expected: [
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ],
    desc: "exemplo oficial clássico",
  },
  {
    A: [
      [1, 3],
      [5, 9],
    ],
    B: [],
    expected: [],
    desc: "uma lista vazia",
  },
  {
    A: [[1, 7]],
    B: [[3, 10]],
    expected: [[3, 7]],
    desc: "um intervalo contido no outro",
  },
  {
    A: [[1, 2]],
    B: [[3, 4]],
    expected: [],
    desc: "disjuntos",
  },
  {
    A: [[1, 3]],
    B: [[3, 5]],
    expected: [[3, 3]],
    desc: "toque na borda (fechado)",
  },
];

// ------------------------------------------------------------
// Testes Jest
describe("986. Interval List Intersections", () => {
  test.each(examples)("Exemplo: $desc", ({ A, B, expected }) => {
    const got = intervalIntersection(A, B);
    expect(got).toEqual(expected);
  });

  test("Sequências longas alternadas", () => {
    const A = [
      [1, 4],
      [6, 8],
      [10, 12],
      [14, 16],
    ];
    const B = [
      [2, 3],
      [5, 7],
      [9, 11],
      [13, 15],
      [17, 19],
    ];
    const expected = [
      [2, 3],
      [6, 7],
      [10, 11],
      [14, 15],
    ];
    expect(intervalIntersection(A, B)).toEqual(expected);
  });
});
