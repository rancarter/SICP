function average(a, b) {
  return (a + b) / 2;
}

function compose(f1, f2) {
  return (x) => f1(f2(x));
}

function repeated(f, times) {
  return times === 1 ? f : compose(f, repeated(f, times - 1));
}

function average_damp(f) {
  return (x) => average(x, f(x));
}

function fixed_point(f, first_guess) {
  const tolerance = 0.001;

  function close_enough(x, y) {
    return Math.abs(x - y) < tolerance;
  }

  function try_with(guess) {
    const next = f(guess);

    return close_enough(guess, next) ? next : try_with(next);
  }

  return try_with(first_guess);
}

function sqrt(x) {
  return fixed_point(
    average_damp((y) => x / y),
    1
  );
}

function cube_root(x) {
  return fixed_point(
    average_damp((y) => x / (y * y)),
    1
  );
}

function root4(x) {
  return fixed_point(
    repeated(average_damp, 2)((y) => x / (y * y * y)),
    1
  );
}

function root8(x) {
  return fixed_point(
    repeated(average_damp, 3)((y) => x / (y * y * y * y * y * y * y)),
    1
  );
}

console.log(sqrt(16));
console.log(cube_root(2));
console.log(root4(16));
console.log(root8(256));
