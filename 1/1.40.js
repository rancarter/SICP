const dx = 0.00001;

function deriv(g) {
  return (x) => (g(x + dx) - g(x)) / dx;
}

function newton_transform(g) {
  return (x) => x - g(x) / deriv(g)(x);
}

function newtons_method(g, guess) {
  return fixed_point(newton_transform(g), guess);
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

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function cubic(a, b, c) {
  return (x) => cube(x) + a * square(x) + b * x + c;
}

console.log(newtons_method(cubic(1, 1, 1), 1));
