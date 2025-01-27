let i = 0;

function gcd(a, b) {
  return b() == 0
    ? a()
    : gcd(b, () => {
        i++;
        return a() % b();
      });
}

function a() {
  return 206;
}

function b() {
  return 40;
}

console.log("GCD:", gcd(a, b));
console.log("remainder operations count:", i); // 18 times
