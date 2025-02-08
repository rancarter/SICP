const tolerance = 0.00001;

function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    console.log(x, y);
    return Math.abs(x - y) < tolerance;
  }
  function try_with(guess) {
    const next = f(guess);

    return close_enough(guess, next) ? next : try_with(next);
  }

  return try_with(first_guess);
}

function solve_equation() {
  return fixed_point((x) => Math.log(1000) / Math.log(x), 2);
}

function solve_equation_with_average_dumping() {
  function average(a, b) {
    return (a + b) / 2;
  }

  return fixed_point((x) => average(x, Math.log(1000) / Math.log(x)), 2);
}

console.log('**** fixed point *****');
console.log(solve_equation());

console.log('**** with average dumping *****');
console.log(solve_equation_with_average_dumping());
