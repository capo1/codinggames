//EASY: https://www.codingame.com/training/easy/disordered-first-contact

const n = parseInt(readline());
let m = readline().split``;
const abs = (i) => [-i, i][+(i > 0)];
// Write an action using console.log()
// To debug: console.error('Debug messages...');

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
function encrypt(m, n) {
  let result, i;
  for (let y = 0; y < abs(n); y++) {
    (result = []), (i = 0);

    while (m.length > 0) {
      result =
        ++i % 2 === 0
          ? m.splice(0, i).concat(result)
          : result.concat(m.splice(0, i));
    }
    m = result;
  }
  return result.join``;
}

function decrytp(m, n) {
  let tempM = [...m],
    i = 0,
    chunks = [],
    result = [];

  //prepare table of chunks from message length
  while (tempM.length > 0) {
    chunks.push(tempM.splice(0, ++i).length);
  }

  //reverse chunks to start from the end of proces coding
  chunks = chunks.reverse();

  for (let y = 0; y < abs(n); y++) {
    result = [];

    for (let idx in chunks) {
      result = m
        .splice(
          // false ^ true => true,  true ^ true => false, false ^ false => false
          // if length of chunks is even XOR index is even
          chunks.length % 2 ^ idx % 2 ? m.length - chunks[idx] : 0,
          chunks[idx]
        )
        .concat(result);
    }
    m = result;
  }
  return result.join``;
}

console.log(n < 0 ? encrypt(m, n) : decrytp(m, n));
