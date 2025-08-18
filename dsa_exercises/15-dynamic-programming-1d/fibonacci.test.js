/**
 * LeetCode Problem: Fibonacci Number
 *
 * The Fibonacci numbers, commonly denoted F(n), form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1.
 * That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 *
 * Given n, calculate F(n).
 *
 * Example:
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = (2) + (1) = 3
 *
 * Constraints:
 * 0 <= n <= 30
 */

// --- Solution: Bottom-up Dynamic Programming (iterative with O(1) space)
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= n; i++) {
    const currentN = prev1 + prev2;
    prev1 = prev2;
    prev2 = currentN;
  }

  return prev2;
}

test("fib returns correct Fibonacci numbers", () => {
  expect(fib(0)).toBe(0);
  expect(fib(1)).toBe(1);
  expect(fib(2)).toBe(1);
  expect(fib(3)).toBe(2);
  expect(fib(4)).toBe(3);
  expect(fib(5)).toBe(5);
  expect(fib(10)).toBe(55);
  expect(fib(20)).toBe(6765);
});
