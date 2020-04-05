//MEDIUM - https://www.codingame.com/ide/puzzle/the-gift
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = +readline();
let C = +readline();

let p = new Array(N).fill(0);
let res = "IMPOSSIBLE";

p = p.map((a) => +readline());

if (p.reduce((a, b) => a + b) >= C) {

    p.sort((a, b) => a - b).forEach((a, b) => {
        res = Math.min(a, ~~(C / (N - b)));
        print(res)
        C -= res;
    });

} else {

    print(res);
}