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
    : find_divisor(n, next(test_divisor));
}

function next(test_divisor) {
  return test_divisor === 2
    ? 3
    : test_divisor + 2
}

function divides(a, b) {
  return b % a === 0;
}

function square(n) {
  return n * n;
}

async function test() {
  await timed_prime_test(1009); // 21 sec
  await timed_prime_test(1013); // 20 sec
  await timed_prime_test(1019); // 20 sec
  await timed_prime_test(10007); // 59 sec 
  await timed_prime_test(10009); // 58 sec
  await timed_prime_test(10037); // 56 sec
  await timed_prime_test(100003); // 183 sec
  await timed_prime_test(100019); // 187 sec
  await timed_prime_test(100043); // 181 sec
}

test();