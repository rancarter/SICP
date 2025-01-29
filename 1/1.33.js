function filtered_accumulate(combiner, filter, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : combiner(
        filter(a) ? term(a) : null_value,
        filtered_accumulate(
          combiner,
          filter,
          null_value,
          term,
          next(a),
          next,
          b
        )
      );
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a + b;
}

function square(a) {
  return a * a;
}

function inc(a) {
  return a + 1;
}

function divides(a, b) {
  return b % a === 0;
}

function is_prime(n) {
  return n === smallest_divisor(n);
}

function smallest_divisor(n) {
  return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
  return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, test_divisor + 1);
}

function sum_primes_squares(b) {
  return filtered_accumulate(add, is_prime, 0, square, 2, inc, b);
}

function product_whatever(n) {
  function predicate(i) {
    return gcd(i, n) === 1;
  }

  function identity(x) {
    return x;
  }

  function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
  }

  return filtered_accumulate(multiply, predicate, 1, identity, 1, inc, n);
}

console.log(sum_primes_squares(10)); // 87
console.log(product_whatever(10)); // 27 - not sure it is correct 
