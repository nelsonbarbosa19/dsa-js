// 01-arrays/3_mergeSortedArrays.template.js

/**
 * Template: Merge Sorted Arrays
 * Quando usar: Combinar dois arrays ordenados em um só array ordenado.
 * Notas: Use 2 ponteiros para percorrer cada array.
 * Complexidade:
 * - Tempo: O(n + m), porque percorremos todos os elementos dos dois arrays.
 * - Espaço: O(n + m), para armazenar o array final.
 * Exemplos:
 * Input: nums1 = [1,3,5], nums2 = [2,4,6]
 * Output: [1,2,3,4,5,6]
 */

function mergeSortedArrays(nums1, nums2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  return merged;
}
