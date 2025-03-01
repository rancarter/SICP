import { getUnsortedArray } from "./data.mjs";

export function mergeSort(A, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);

    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }

  return A;
}

function merge(A, p, q, r) {
  const L = A.slice(p, q + 1);
  const R = A.slice(q + 1, r + 1);

  L.push(Infinity);
  R.push(Infinity);

  let i = 0;
  let j = 0;

  for (let k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
  }

  return A;
}

const data = getUnsortedArray();
const sorted = mergeSort([...data], 0, data.length - 1);

// console.log(sorted);
