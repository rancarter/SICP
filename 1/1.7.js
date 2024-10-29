function sqrt_iter(guess, x, prev_guess) {
  return is_good_enough(prev_guess - guess)
    ? guess
    : sqrt_iter(improve(guess, x), x, guess);
}

function is_good_enough(diff) {
  return Math.abs(diff) < 0.001;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function square() {
  return sqrt_iter(0.00001, 0.005, 10);
}

console.log(square());
