function cube(x) {
  return x * x * x;
}

function sum(f, a, next, b) {
  return a > b ? 0 : f(a) + sum(f, next(a), next, b);
}

function integral(f, a, b, dx) {
  function add_dx(x) {
    return x + dx;
  }

  return sum(f, a + dx / 2, add_dx, b) * dx;
}

function simpson_integral(f, a, b, n) {
  const h = (b - a) / n;

  function next(a) {
    return a + h + h;
  }

  return (
    (h / 3) *
    (f(a) +
      2 * sum(f, next(a), next, b - h) +
      4 * sum(f, a + h, next, b) +
      f(b))
  );
}

console.log(integral(cube, 0, 1, 0.01)); // 0.24998750000000042
console.log(integral(cube, 0, 1, 0.001)); // 0.249999875000001

console.log(simpson_integral(cube, 0, 1, 100)); // 0.25000000000000044
console.log(simpson_integral(cube, 0, 1, 1000)); // 0.25000000000000083
