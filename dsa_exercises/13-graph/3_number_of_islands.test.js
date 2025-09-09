/**
 * Descrição:
 * Dada uma matriz grid de '1's (terra) e '0's (água),
 * retorna o número de ilhas. Uma ilha é formada por
 * terras conectadas horizontalmente ou verticalmente.
 *
 * Exemplo:
 *   Input:
 *     [
 *       ["1","1","0","0","0"],
 *       ["1","1","0","0","0"],
 *       ["0","0","1","0","0"],
 *       ["0","0","0","1","1"]
 *     ]
 *   Output: 3
 */

function numIslands(grid) {
  if (!grid?.length) return 0;

  const rwsLength = grid.length;
  const clsLength = grid[0].length;
  let count = 0;

  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= rwsLength ||
      c >= clsLength ||
      grid[r][c] === "0"
    ) {
      return;
    }

    grid[r][c] = "0";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c + 1);
  }

  for (let r = 0; r < rwsLength; r++) {
    for (let c = 0; c < clsLength; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}

module.exports = { numIslands };

/* Testes Jest */
describe("numIslands (Grid -> Graph)", () => {
  test("exemplo clássico", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  test("tudo água", () => {
    const grid = [
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(0);
  });

  test("tudo terra (1 ilha)", () => {
    const grid = [
      ["1", "1"],
      ["1", "1"],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  test("ilhas separadas", () => {
    const grid = [
      ["1", "0", "1", "0"],
      ["0", "1", "0", "1"],
      ["1", "0", "1", "0"],
      ["0", "1", "0", "1"],
    ];
    expect(numIslands(grid)).toBe(8);
  });

  test("grid vazio", () => {
    const grid = [];
    expect(numIslands(grid)).toBe(0);
  });
});
