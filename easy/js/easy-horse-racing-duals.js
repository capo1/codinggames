//EASY: https://www.codingame.com/training/easy/horse-racing-duals

let m = [];
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  m.push(parseInt(readline()));
}

console.log(
  m
    .sort((a, b) => b - a)
    .map((a, b) => Math.abs(a - m[b + 1]))
    .sort()[0]
);
