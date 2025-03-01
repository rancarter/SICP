function cube_root_iter(guess, x) {
  return is_good_enough(guess, x)
    ? guess
    : cube_root_iter(improve(guess, x), x);
}

function is_good_enough(guess, x) {
  return Math.abs(x - guess * guess * guess) < 0.0001;
}

function improve(guess, x) {
  return (x / square(guess) + 2 * guess) / 3;
}

function square(x) {
  return x * x;
}

console.log(cube_root_iter(1, 500));
