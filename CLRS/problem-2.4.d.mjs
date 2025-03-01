let inversionCount = 0;

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

  let i = 0;
  let j = 0;

  for (let k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    } else {
      inversionCount++;
      A[k] = R[j];
      j++;
    }
  }

  return A;
}

console.log(mergeSort([2, 3, 8, 6, 1], 0, 4));
console.log(inversionCount);
