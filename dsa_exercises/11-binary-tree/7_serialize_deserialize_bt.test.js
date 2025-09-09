/**
 * Descrição:
 * Implementa duas funções:
 * - serialize(root): converte uma Binary Tree para uma string.
 * - deserialize(data): reconstrói a Binary Tree a partir dessa string.
 *
 * O formato pode ser qualquer, desde que consistente.
 * O mais comum: BFS com "null" para filhos ausentes.
 *
 * Exemplo:
 *   Input:    [1,2,3,null,null,4,5]
 *   serialize => "1,2,3,null,null,4,5"
 *   deserialize => [1,2,3,null,null,4,5]
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function serialize(root) {
  if (!root) return "null";

  let res = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      res.push(node.val.toString());

      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push("null");
    }
  }

  return res.join(",");
}

function deserialize(data) {
  // Escreve a tua solução aqui
}

module.exports = { TreeNode, serialize, deserialize };

/* Testes Jest */
describe("serialize & deserialize (Binary Tree)", () => {
  test("exemplo clássico", () => {
    // Árvore:
    //       1
    //      / \
    //     2   3
    //        / \
    //       4   5
    const root = new TreeNode(
      1,
      new TreeNode(2),
      new TreeNode(3, new TreeNode(4), new TreeNode(5))
    );

    const data = serialize(root);
    const newRoot = deserialize(data);

    // Re-serializar deve dar o mesmo resultado
    expect(serialize(newRoot)).toBe(data);
  });

  test("árvore vazia", () => {
    const root = null;
    const data = serialize(root);
    expect(deserialize(data)).toBe(null);
  });

  test("apenas raiz", () => {
    const root = new TreeNode(42);
    const data = serialize(root);
    const newRoot = deserialize(data);
    expect(newRoot.val).toBe(42);
    expect(newRoot.left).toBe(null);
    expect(newRoot.right).toBe(null);
  });

  test("árvore degenerada à esquerda", () => {
    //  1
    // /
    // 2
    // /
    // 3
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
    const data = serialize(root);
    const newRoot = deserialize(data);
    expect(serialize(newRoot)).toBe(data);
  });

  test("árvore degenerada à direita", () => {
    // 1
    //  \
    //   2
    //    \
    //     3
    const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    const data = serialize(root);
    const newRoot = deserialize(data);
    expect(serialize(newRoot)).toBe(data);
  });
});
