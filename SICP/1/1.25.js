function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? square(expmod(base, exp / 2, m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
}

function expmod2(base, exp, m) {
  return fast_expt(base, exp) % m;
}

function fast_expt(base, exp) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? fast_expt(square(base), exp / 2)
    : base * fast_expt(base, exp - 1);
}

function is_even(x) {
  return x % 2 === 0;
}

function square(x) {
  return x * x;
}

console.log(expmod(3, 1009, 1009));
console.log(expmod2(3, 1009, 1009));

// exponent value becoming too big