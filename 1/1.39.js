function cont_frac(n, d, k) {
  function iter(i) {
    return i === k ? 1 : n(i) / (d(i) + iter(i + 1));
  }

  return iter(1);
}

function tan_cf(x, k) {
  function n(i) {
    return i === 1 ? x : x * x * -1;
  }

  function d(i) {
    return i * 2 - 1;
  }

  return cont_frac(n, d, k);
}

console.log(tan_cf(1, 10));
