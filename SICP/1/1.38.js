function cont_frac(n, d, k) {
  function iter(i) {
    return i === k ? 1 : n(i) / (d(i) + iter(i + 1));
  }

  return iter(1);
}

function euler() {
  function n() {
    return 1;
  }

  function d(i) {
    return i === 1
      ? 1
      : i === 2
      ? 2
      : i === 3
      ? 1
      : i === 4
      ? 1
      : i === 5
      ? 4
      : i === 6
      ? 1
      : i === 7
      ? 1
      : i === 8
      ? 6
      : i === 9
      ? 1
      : i === 10
      ? 1
      : i === 11
      ? 8
      : 1;
  }

  return 2 + cont_frac(n, d, 11);
}

console.log(euler());