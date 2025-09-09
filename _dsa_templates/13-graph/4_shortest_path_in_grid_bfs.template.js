/**
 * Template: BFS em Grid (Caminho Mínimo)
 * Quando usar: Quando precisas encontrar o menor número de passos
 *              entre duas posições numa matriz (grid).
 *
 * Notas:
 * - Cada célula é tratada como um nó do grafo.
 * - Usamos BFS porque ele encontra o caminho mais curto em grafos não ponderados.
 * - Exemplo típico: encontrar o caminho mais curto de (0,0) até (m-1,n-1)
 *   evitando obstáculos.
 *
 * Complexidade:
 * - Tempo: O(m * n), onde m = linhas e n = colunas.
 * - Espaço: O(m * n) (fila e visited).
 */

function shortestPath(grid, start, end) {
  const rows = grid.length;
  const cols = grid[0].length;

  const [startR, startC] = start;
  const [endR, endC] = end;

  // Se a célula inicial ou final forem obstáculos, não há caminho
  if (grid[startR][startC] === 1 || grid[endR][endC] === 1) return -1;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue = [[startR, startC, 0]]; // [row, col, distance]
  visited[startR][startC] = true;

  const directions = [
    [1, 0], // baixo
    [-1, 0], // cima
    [0, 1], // direita
    [0, -1], // esquerda
  ];

  while (queue.length > 0) {
    const [row, col, dist] = queue.shift();

    if (row === endR && col === endC) {
      return dist; // chegamos ao destino
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < rows &&
        newCol < cols &&
        grid[newRow][newCol] === 0 && // célula livre
        !visited[newRow][newCol]
      ) {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol, dist + 1]);
      }
    }
  }

  return -1; // destino não alcançável
}
