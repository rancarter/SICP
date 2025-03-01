import { getUnsortedArray } from "./data.mjs";

function mergeSort(A, p, r) {
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

  let k = p;

  while (L.length > 1 && R.length > 1) {
    if (L[0] <= R[0]) {
      A[k] = L.shift();
    } else {
      A[k] = R.shift();
    }
    k++;
  }

  L.pop();
  R.pop();

  if (L.length) {
    A.splice(k, r - k + 1, ...L);
  } else {
    A.splice(k, r - k + 1, ...R);
  }
}

const data = getUnsortedArray();
const sorted = mergeSort([...data], 0, data.length - 1);

console.log(sorted);
