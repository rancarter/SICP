const dx = 0.00001;

function average(a, b, c) {
  return (a + b + c) / 3;
}

function smooth(f) {
  return (x) => average(f(x - dx), f(x), f(x + dx));
}

function compose(f1, f2) {
  return (x) => f1(f2(x));
}

function repeated(f, times) {
  return times === 1 ? f : compose(f, repeated(f, times - 1));
}

function smooth_nth(f, n) {
  return repeated(smooth, n)(f);
}

console.log(smooth_nth((x) => x * x, 10)(5));
