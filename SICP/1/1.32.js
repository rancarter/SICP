function accumulate(combiner, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : combiner(
        term(a),
        accumulate(combiner, null_value, term, next(a), next, b)
      );
}

function accumulate_iter(combiner, result, term, a, next, b) {
  return a > b
    ? result
    : accumulate_iter(
        combiner,
        combiner(result, term(a)),
        term,
        next(a),
        next,
        b
      );
}

function sum(term, a, next, b) {
  function add(a, b) {
    return a + b;
  }

  return accumulate(add, 0, term, a, next, b);
}

function identity(x) {
  return x;
}

function inc(x) {
  return x + 1;
}

function product(term, a, next, b) {
  function multiply(a, b) {
    return a * b;
  }

  return accumulate_iter(multiply, 1, term, a, next, b);
}

console.log(sum(identity, 0, inc, 5));
console.log(product(identity, 1, inc, 5));
