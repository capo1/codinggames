//EASY: https://www.codingame.com/training/easy/happy-numbers

const N = parseInt(readline());

const imHappy = (n) => {
  while (n) {
    if (n == 1) return true;
    n = (n + "").split``.reduce((a, b) => a + b * b, 0);
    if (n == 4) return false;
  }
  return false;
};

for (let i = 0; i < N; i++) {
  let x = readline().toString();
  console.log(imHappy(x) ? `${x} :)` : `${x} :(`);
}
