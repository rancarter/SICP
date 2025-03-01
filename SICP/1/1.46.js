function average(a, b) {
  return (a + b) / 2;
}

function iterative_improve(good_enough, improve) {
  return function iter(guess) {
    const next = improve(guess);
    return good_enough(guess, next) ? next : iter(next);
  };
}

function sqrt(n, guess) {
  return iterative_improve(
    (guess) => Math.abs(guess * guess - n) < 0.001,
    (guess) => average(guess, n / guess)
  )(guess);
}

function fixed_point(f, guess) {
  return iterative_improve(
    (guess, next) => Math.abs(guess - next) < 0.0001,
    (guess) => f(guess)
  )(guess);
}

console.log(sqrt(81, 1));
console.log(fixed_point(Math.cos, 1));
