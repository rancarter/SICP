function p() {
  console.log("Applicative order");
}

function test(x, y) {
  return x === 0 ? 0 : y;
}

test(0, p());
