import { getUnsortedArray } from "./data.mjs";
import { insertionSort } from "./insertion-sort.mjs";

function recursiveInsertionSort(A, n) {
  if (n > 0) {
    recursiveInsertionSort(A, n - 1);
    insert(A, n);
  }

  return A;
}

function insert(A, j) {
  const key = A[j];
  let i = j - 1;

  while (i >= 0 && A[i] > key) {
    A[i + 1] = A[i];
    i--;
  }

  A[i + 1] = key;
}

const data = getUnsortedArray();
const sorted = recursiveInsertionSort([...data], data.length - 1);

console.log(sorted);
