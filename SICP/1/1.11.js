/*
  f(n) = n if n < 3
  f(n) = f(n-1) + 2f(n-2) + 3f(n-3) if n >= 3
**/

function f(n) {
  return n < 3
    ? n
    : f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3);
}

function f_iter(n, i, a, b, c) {
  return n < 3
    ? n
    : i < 3
      ? a
      : f_iter(
          n,
          i - 1,
          a + 2 * b + 3 * c, 
          a, 
          b,
        )
}

function f2(n) {
  return f_iter(n, n, 2, 1, 0);
}

console.log(f(10), f2(10));

