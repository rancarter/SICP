function fast_expt(a, b, expt) {
  return expt === 0
    ? 1
    : expt === 1
    ? a * b
    : is_even(expt)
    ? fast_expt(a, square(b), expt / 2)
    : fast_expt(a * b, b, expt - 1);
}

function square(x) {
  return x * x;
}

function is_even(x) {
  return x % 2 === 0;
}

console.log(fast_expt(1, 2, 7));
// O(logn) steps
// O(1) memory