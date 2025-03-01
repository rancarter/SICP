function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1));
}

function timed_prime_test(n) {
  return start_prime_test(n, get_time());
}

async function start_prime_test(n, start_time) {
  return (await is_prime(n)) ? report_prime(n, get_time() - start_time) : false;
}

function report_prime(n, elapsed_time) {
  display(n, "is prime");
  display(elapsed_time, "time spent");
  return true;
}

function display(...args) {
  console.log(...args);
}

function get_time() {
  return Date.now();
}

async function is_prime(n) {
  return n === (await smallest_divisor(n));
}

function smallest_divisor(n) {
  return find_divisor(n, 2);
}

async function find_divisor(n, test_divisor) {
  await sleep();
  return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, test_divisor + 1);
}

function divides(a, b) {
  return b % a === 0;
}

function square(n) {
  return n * n;
}

async function search_for_primes(n, primes_count) {
  return primes_count === 3
    ? n
    : (await timed_prime_test(n))
    ? await search_for_primes(n + 2, primes_count + 1)
    : await search_for_primes(n + 2, primes_count);
}

async function test() {
  await search_for_primes(1001, 0); // 1009, 1013, 1019 - 36 sec
  await search_for_primes(10001, 0); // 10007, 10009, 10037 - 115 sec
  await search_for_primes(100001, 0); // 100003, 100019, 100043 - 368 sec
}

test();