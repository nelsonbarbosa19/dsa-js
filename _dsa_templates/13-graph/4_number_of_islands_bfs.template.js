/**
 * Template: BFS em Grid (Número de Ilhas)
 * Quando usar: Quando precisas contar componentes conectados numa matriz (grid),
 *              mas usando BFS em vez de DFS.
 *
 * Notas:
 * - O grid é tratado como um grafo implícito: cada célula '1' (terra) está ligada
 *   a vizinhos (cima, baixo, esquerda, direita).
 * - Usamos BFS com uma fila (queue) para percorrer a ilha.
 *
 * Complexidade:
 * - Tempo: O(m * n), onde m = linhas e n = colunas.
 * - Espaço: O(min(m, n)) em média, no pior caso O(m * n) (quando toda a grid é terra).
 */

function numIslandsBfs(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function bfs(r, c) {
    const queue = [[r, c]];
    grid[r][c] = "0"; // marca como visitado

    while (queue.length > 0) {
      const [row, col] = queue.shift();

      // Quatro direções possíveis
      const directions = [
        [1, 0], // baixo
        [-1, 0], // cima
        [0, 1], // direita
        [0, -1], // esquerda
      ];

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < rows &&
          newCol < cols &&
          grid[newRow][newCol] === "1"
        ) {
          grid[newRow][newCol] = "0"; // marca como visitado
          queue.push([newRow, newCol]);
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        bfs(r, c); // percorre a ilha
      }
    }
  }

  return count;
}
