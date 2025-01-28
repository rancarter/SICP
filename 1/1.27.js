function test_numbers(n, i) {
  return i >= n 
    ? true 
    : fermat_test(n, i) 
    ? test_numbers(n, i + 1) 
    : false;
}

function test(n) {
  return test_numbers(n, 1);
}

function fermat_test(n, a) {
  return expmod(a, n, n) === a;
}

function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? square(expmod(base, exp / 2, m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
}


function is_even(x) {
  return x % 2 === 0;
}

function square(x) {
  return x * x;
}

console.log(test(561)); // true
console.log(test(1105)); // true
console.log(test(1729)); // true
console.log(test(2465)); // true
console.log(test(2821)); // true
console.log(test(6601)); // true

// Yes these Carmichael number fool the Fermat test