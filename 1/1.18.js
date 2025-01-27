function fast_times(a, b, times) {
  return times === 0
    ? 0
    : times === 1
    ? a + b
    : is_even(times)
    ? fast_times(a, double(b), halve(times))
    : fast_times(a + b, b, times - 1);
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

console.log(fast_times(0, 4, 6));
