/**
 * 📝 Exercício: Contains Duplicate
 *
 * Dado um array de inteiros `nums`, retorna true se algum valor aparece
 * pelo menos duas vezes no array, e false se todos os elementos forem distintos.
 *
 * Exemplos:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */

function containsDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) return true;

    seen.add(num);
  }

  return false;
}

describe("containsDuplicate", () => {
  test("deve retornar true quando há duplicados", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test("deve retornar false quando não há duplicados", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test("deve retornar true em caso de múltiplos duplicados", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  test("deve retornar false para array vazio", () => {
    expect(containsDuplicate([])).toBe(false);
  });

  test("deve retornar false para array com único elemento", () => {
    expect(containsDuplicate([99])).toBe(false);
  });
});
