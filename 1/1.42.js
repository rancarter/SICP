function square(x) {
  return x * x;
}

function inc(x) {
  return x + 1;
}

function compose(f1, f2) {
  return (x) => f1(f2(x));
}

console.log(compose(square, inc)(6));