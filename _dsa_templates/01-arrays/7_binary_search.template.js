// 01-arrays/binary_search.template.js

/**
 * Template: Binary Search – Pesquisa em array ordenado
 * Quando usar: Quando tens um array ordenado e precisas de buscar um elemento com eficiência.
 * Notas:
 * - Clássico "divide and conquer".
 * - Retorna índice do elemento ou -1 se não encontrado.
 * Complexidade:
 * - Tempo: O(log n)
 * - Espaço: O(1)
 */

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
