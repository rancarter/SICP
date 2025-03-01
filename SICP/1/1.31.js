function product(f, a, next, b) {
  return a > b ? 1 : f(a) * product(f, next(a), next, b);
}

function product_iter(f, a, next, b) {
  function iter(a, result) {
    return a > b
      ? result
      : iter(next(a), f(a) * result)
  }

  return iter(a, 1);
}

function identity(x) {
  return x;
}

function square(x) {
  return x * x;
}

function factorial(b) {
  function next(x) {
    return x + 1;
  }

  if (b === 0) {
    return 1;
  }

  return product(identity, 1, next, b);
}

function apr_pi() {
  function next(a) {
    return a + 2;
  }

  return (
    (2 * product_iter(square, 4, next, 6) * 8) /
    product_iter(square, 3, next, 7)
  );
}

console.log(factorial(10)); // 3628800
console.log(apr_pi()); // 0.8359183673469388
