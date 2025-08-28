// 20-prefix-sum/2_productOfArrayExceptSelf.test.js

/**
 * LeetCode 238 – Product of Array Except Self
 *
 * Descrição:
 * Dado um array de inteiros `nums`, retorna um novo array `answer` tal que
 * `answer[i]` é igual ao produto de todos os elementos de `nums`, exceto `nums[i]`.
 *
 * Restrições:
 * - Não podes usar divisão.
 * - Deve correr em O(n) tempo.
 *
 * Exemplos:
 * Input:  [1, 2, 3, 4]
 * Output: [24, 12, 8, 6]
 *
 * Input:  [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 */

function productOfArrayExceptSelf(nums) {
  const nLength = nums.length;
  const res = new Array(nLength);
  const prefixMap = new Array(nLength);
  const suffixMap = new Array(nLength);

  prefixMap[0] = 1;
  suffixMap[nLength - 1] = 1;

  for (let i = 1; i < nLength; i++) {
    prefixMap[i] = prefixMap[i - 1] * nums[i - 1];
  }

  for (let i = nLength - 2; i >= 0; i--) {
    suffixMap[i] = suffixMap[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < prefixMap.length; i++) {
    const multiply = prefixMap[i] * suffixMap[i];

    // Convert -0 to 0.
    res[i] = multiply === -0 ? 0 : multiply;
  }

  console.log("prefixMap: " + JSON.stringify(prefixMap));
  console.log("suffixMap: " + JSON.stringify(suffixMap));
  console.log("res: " + JSON.stringify(res));

  return res;
}

describe("Product of Array Except Self", () => {
  it("should return the product of array except self", () => {
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 6];
    const result = productOfArrayExceptSelf(nums);
    expect(result).toEqual(expected);
  });

  it("should handle arrays with zero", () => {
    const nums = [-1, 1, 0, -3, 3];
    const expected = [0, 0, 9, 0, 0];
    const result = productOfArrayExceptSelf(nums);
    expect(result).toEqual(expected);
  });
});
