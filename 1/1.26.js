function timed_prime_test(n) {
  return start_prime_test(n, get_time());
}

async function start_prime_test(n, start_time) {
  return (await fast_is_prime(n, 1))
    ? report_prime(n, get_time() - start_time)
    : false;
}

function report_prime(n, elapsed_time) {
  display(n, "is prime");
  display(elapsed_time, "time spent");
  return true;
}

async function fast_is_prime(n, times) {
  return times === 0
    ? true
    : (await fermat_test(n))
    ? await fast_is_prime(n, times - 1)
    : false;
}

async function fermat_test(n) {
  async function try_it(a) {
    return (await expmod(a, n, n)) === a;
  }

  return try_it(1 + Math.floor(Math.random() * (n - 1)));
}

async function expmod(base, exp, m) {
  await sleep();
  return exp === 0
    ? 1
    : is_even(exp)
    ? ((await expmod(base, exp / 2, m)) % m) *
      ((await expmod(base, exp / 2, m)) % m)
    : (base * (await expmod(base, exp - 1, m))) % m;
}

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1));
}

function display(...args) {
  console.log(...args);
}

function get_time() {
  return Date.now();
}

function is_even(x) {
  return x % 2 === 0;
}

function square(n) {
  return n * n;
}

async function test() {
  await timed_prime_test(1009); // 2338 sec
  await timed_prime_test(1013); // 2344 sec
  await timed_prime_test(1019); // 2347 sec
  await timed_prime_test(10007); // 30231 sec
}

test();

/*
 Because javascript has applicative evaluation order
 it has to calculate arguments of multiplication
 and in fact it doubles calls on every multiplication step
 thus it diverges from O(log n) to O(n)
**/
