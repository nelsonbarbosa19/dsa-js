/**
 * Template: DFS em Grid (Número de Ilhas)
 * Quando usar: Quando precisas contar componentes conectados numa matriz (grid),
 *              como em "Number of Islands" (LeetCode #200).
 *
 * Notas:
 * - O grid é tratado como um grafo implícito: cada célula '1' (terra) está ligada
 *   a vizinhos (cima, baixo, esquerda, direita).
 * - Usamos DFS para "afundar" a ilha (marcar como visitada).
 *
 * Complexidade:
 * - Tempo: O(m * n), onde m = linhas e n = colunas.
 * - Espaço: O(m * n) no pior caso (recursão ou stack manual).
 */

function numIslandsDfs(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(r, c) {
    // Se sair fora dos limites ou se não for terra ('1'), termina
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
      return;
    }

    // Marca a célula como visitada (afunda a ilha)
    grid[r][c] = "0";

    // Explora vizinhos (cima, baixo, esquerda, direita)
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c); // Explora toda a ilha a partir daqui
      }
    }
  }

  return count;
}
