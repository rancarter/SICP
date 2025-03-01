function miller_rabin_test(n) {
  function try_it(a) {
    return expmod(a, n - 1, n) === 1;
  }

  return try_it(1 + Math.floor(Math.random() * (n - 1)));
}

function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? remainder_square_checked(expmod(base, exp / 2, m), m) 
    : (base * expmod(base, exp - 1, m)) % m;
}

function remainder_square_checked(a, n) {
  return is_not_trivial(a, n)
    ? 0
    : square(a) % n
}

function is_not_trivial(a, n) {
  return a !== 1 && a !== n - 1 && square(a) % n === 1;
}

function is_even(x) {
  return x % 2 === 0;
}

function square(n) {
  return n * n;
}

console.log('*** Prime numbers ***')
console.log(miller_rabin_test(1009)); // true
console.log(miller_rabin_test(1013)); // true

console.log('*** Carmichael numbers ***')
console.log(miller_rabin_test(561));  // false
console.log(miller_rabin_test(1105)); // false
console.log(miller_rabin_test(1729)); // false
console.log(miller_rabin_test(2465)); // false
console.log(miller_rabin_test(2821)); // false
console.log(miller_rabin_test(6601)); // false
