// 10-linked-list/2_mergeTwoSortedLists.test.js

/**
 * 📝 Exercício: Merge Two Sorted Lists
 * Descrição: Dadas duas listas ligadas ordenadas, mescle-as em uma única lista ligada ordenada.
 * Input: l1 = [1,2,4], l2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * Input: l1 = [], l2 = []
 * Output: []
 * Input: l1 = [], l2 = [0]
 * Output: [0]
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  current.next = l1 || l2;

  return dummy.next;
}

describe("Merge Two Sorted Lists", () => {
  test("Exemplo 1", () => {
    const l1 = arrayToList([1, 2, 4]);
    const l2 = arrayToList([1, 3, 4]);
    expect(listToArray(mergeTwoLists(l1, l2))).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("Exemplo 2", () => {
    const l1 = arrayToList([]);
    const l2 = arrayToList([]);
    expect(listToArray(mergeTwoLists(l1, l2))).toEqual([]);
  });

  test("Exemplo 3", () => {
    const l1 = arrayToList([]);
    const l2 = arrayToList([0]);
    expect(listToArray(mergeTwoLists(l1, l2))).toEqual([0]);
  });
});

// Função auxiliar para transformar array em linked list
function arrayToList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Função auxiliar para transformar linked list em array
function listToArray(node) {
  const res = [];
  while (node) {
    res.push(node.val);
    node = node.next;
  }
  return res;
}
