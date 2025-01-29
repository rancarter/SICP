function sum(term, a, next, b) {
  function iter(a, result) {
    return a > b
      ? result
      : iter(next(a), result + term(a))
  }

  return iter(a, 0);
}

function identity(a) {
  return a;
}

function next(a) {
  return a + 1;
}

console.log(sum(identity, 0, next, 5));