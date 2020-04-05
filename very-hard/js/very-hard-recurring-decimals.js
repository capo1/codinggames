//VERY HARD - https://www.codingame.com/ide/puzzle/recurring-decimals
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
console.error(n)
let i = 0;
let a = [1];
let off;
let ret = "";

while (a[i] && i == (off = a.indexOf(a[i]))) {

    let t = a[i] * 10;
    ret += t / n | 0;
    a[++i] = t % n

    console.error(t, ret, a, i)
}

if (a[i]) {
    console.log("0." + ret.slice(0, off) + "(" + ret.slice(off) + ")")
} else {
    console.log("0." + ret)
}
// Write an action using console.log()
// To debug: console.error('Debug messages...');