//MEDIUM - https://www.codingame.com/ide/puzzle/stock-exchange-losses
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let m = []
const n = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const v = parseInt(inputs[i]);
    m.push(v)
}

console.error(m)

ab = m.map((a, b) => {
    return m[b + 1] - a
}).filter((e) => Number.isInteger(e));

console.error(ab)


let losses = [];
losses[0] = ab[0]

for (let b = 1; b < m.length - 1; b++) {
    losses[b] = Math.min(ab[b], losses[b - 1] + ab[b])
}
losses = losses.filter((a) => a < 0)
console.error(losses)

console.log(losses.length > 0 ? Math.min(...losses) : 0)


// Write an action using console.log()
// To debug: console.error('Debug messages...');


//console.log((min-max)=='Infinity'?0:(min-max));