function cont_frac(n, d, k) {
  function iter(i) {
    return i === k ? 1 : n(i) / (d(i) + iter(i + 1));
  }

  return iter(1);
}

function cont_frac_iter(n, d, k) {
  function iter(result, i) {
    return i === 0
      ? result
      : iter(n(i) / (result + d(i)), i - 1);
  }

  return iter(n(k) / d(k), k - 1);
}

console.log(
  cont_frac(
    () => 1,
    () => 1,
    11
  )
);
console.log(
  cont_frac_iter(
    () => 1,
    () => 1,
    11
  )
);
