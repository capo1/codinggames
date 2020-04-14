//EASY: https://www.codingame.com/training/easy/temperatures

readline();
i = readline().split` `;
m = Math.abs;
console.log(i.sort((a, b) => m(1 - a) - m(1 - b))[0] | 0);
