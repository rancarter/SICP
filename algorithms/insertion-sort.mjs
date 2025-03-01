import { getUnsortedArray } from "./data.mjs";

export function insertionSort(A) {
  for (let j = 1; j < A.length; j++) {
    const key = A[j];
    let i = j - 1;

    while (i >= 0 && A[i] > key) {
      A[i + 1] = A[i];
      i--;
    }

    A[i + 1] = key;
  }

  return A;
}

const data = getUnsortedArray();

// console.log(insertionSort([...data]));
