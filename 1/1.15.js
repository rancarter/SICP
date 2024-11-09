let count = 0;

function cube(x) {
  return x * x * x;
}

function p(x) {
  return 3 * x - 4 * cube(x);
}

function sine(angle) {
  count++;
  return ! (Math.abs(angle) > 0.1)
    ? angle
    : p(sine(angle / 3))
}

console.log(sine(12.15))
console.log(count);

// O(logn) for both memory and steps