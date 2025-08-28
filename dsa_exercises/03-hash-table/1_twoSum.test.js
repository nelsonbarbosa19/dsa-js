// 📝 Exercício: Two Sum
// Dado um array de inteiros `nums` e um inteiro `target`,
// retorna os índices de dois números de forma que a soma seja igual a `target`.
// Garante-se que existe sempre uma única solução e não podes usar o mesmo elemento duas vezes.
//
// 🔹 Exemplos:
//   Input: nums = [2,7,11,15], target = 9
//   Output: [0,1]   // porque nums[0] + nums[1] = 2 + 7 = 9
//
//   Input: nums = [3,2,4], target = 6
//   Output: [1,2]   // porque nums[1] + nums[2] = 2 + 4 = 6
//
//   Input: nums = [3,3], target = 6
//   Output: [0,1]
//
// Implementa a função twoSum(nums, target) que retorna o array de índices.

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// ----------------------
// ✅ Testes com Jest
// ----------------------
describe("twoSum", () => {
  test("caso clássico [2,7,11,15], target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("array [3,2,4], target = 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("array com duplicados [3,3], target = 6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("array maior [1,5,10,20,40], target = 60", () => {
    expect(twoSum([1, 5, 10, 20, 40], 60)).toEqual([3, 4]);
  });
});
