// 07-intervals/3_meetingRooms.template.js

/**
 * Template: Meeting Rooms II
 * Quando usar: Quando precisamos calcular o número mínimo de salas de reunião
 * necessárias para que todas as reuniões sejam agendadas sem conflito.
 *
 * Notas:
 * - O problema pede: dado um conjunto de intervalos [start, end] representando reuniões,
 *   determinar quantas salas são necessárias para acomodar todas as reuniões sem sobreposição.
 * - Estratégia:
 *   1. Extrair os arrays de inícios e fins.
 *   2. Ordenar ambos separadamente.
 *   3. Percorrer os inícios e comparar com os fins usando dois ponteiros:
 *      - Se uma reunião começar antes de outra terminar → precisamos de mais uma sala.
 *      - Caso contrário, "libertamos" uma sala avançando o ponteiro dos fins.
 * - Armadilha comum: tentar apenas ordenar os intervalos por start, isso não basta para
 *   contar corretamente o nº de salas.
 *
 * Complexidade:
 * - Tempo: O(n log n), devido à ordenação de inícios e fins.
 * - Espaço: O(n), pois guardamos dois arrays (starts e ends).
 *
 * Exemplos:
 * - Input: [[0,30],[5,10],[15,20]] → Output: 2
 *   (a reunião [0,30] ainda não acabou quando [5,10] começa, precisamos de 2 salas).
 * - Input: [[7,10],[2,4]] → Output: 1
 *   (nenhuma sobreposição, apenas 1 sala necessária).
 */

function meetingRooms(intervals) {
  let starts = intervals.map((i) => i[0]).sort((a, b) => a - b);
  let ends = intervals.map((i) => i[1]).sort((a, b) => a - b);

  let rooms = 0;
  let endPtr = 0;

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endPtr]) {
      rooms++; // conflito → precisa de nova sala
    } else {
      endPtr++; // uma sala foi libertada
    }
  }

  return rooms;
}

module.exports = meetingRooms;
