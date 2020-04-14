//MEDIUM: https://www.codingame.com/training/medium/sum-of-divisors

const n = parseInt(readline());

let result = 0;

for (let i = 1; i <= n; i++) {
  result += Math.floor(n / i) * i;
}
console.log(
  Array.from({ length: n }, (v, k) => k + 1).reduce(
    (a, b) => Math.floor(n / b) * b + a,
    0
  )
);
