const tolerance = 0.00001;

function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return Math.abs(x - y) < tolerance;
  }
  function try_with(guess) {
    const next = f(guess);

    return close_enough(guess, next)
      ? next
      : try_with(next);
  }

  return try_with(first_guess);
}

function golder_ratio() {
  return fixed_point(x => 1 + 1/x, 1);
}

console.log(golder_ratio()); // 1.6180327868852458