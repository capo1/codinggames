// EASY: https://www.codingame.com/training/easy/the-descent
let mountainHeight = [];
while (true) {
  for (let i = 0; i < 8; i++) {
    mountainHeight[i] = parseInt(readline());
  }
  console.log(mountainHeight.indexOf(Math.max(...mountainHeight)));
}
