function fast_times(a, b) {
  return b === 0
    ? 0
    : b === 1
    ? a
    : is_even(b)
    ? fast_times(double(a), halve(b))
    : a + fast_times(a, b - 1)
}

function is_even(x) {
  return x % 2 === 0;
}

function double(x) {
  return x + x;
}

function halve(x) {
  return x / 2;
}

console.log(fast_times(4, 7))