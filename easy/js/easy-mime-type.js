//EASY: https://www.codingame.com/training/easy/mime-type

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

let m = [];
let f = [];

for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const EXT = inputs[0]; // file extension
  const MT = inputs[1]; // MIME type.
  m[EXT] = MT;
  m[EXT.toLowerCase()] = MT;
  m[EXT.toUpperCase()] = MT;
}

console.error(m);

for (let i = 0; i < Q; i++) {
  const FNAME = readline(); // One file name per line.
  f.push(FNAME);
}

function getExt(a) {
  return a.lastIndexOf(".") > -1
    ? a.slice(a.lastIndexOf(".") + 1, a.length)
    : "";
}

f.map((a) =>
  console.log(
    m[getExt(a).toUpperCase()] || m[getExt(a).toLowerCase()] || "UNKNOWN"
  )
);
