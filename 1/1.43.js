function square(x) {
  return x * x;
}

function compose(f1, f2) {
  return (x) => f1(f2(x));
}

function repeated(f, times) {
  return times === 1 ? f : compose(f, repeated(f, times - 1));
}
