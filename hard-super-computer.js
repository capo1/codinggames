//HARD - https://www.codingame.com/ide/puzzle/super-computer
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let t = []
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const J = parseInt(inputs[0]);
    const D = parseInt(inputs[1]);
    t.push([J, J + D - 1])
}

t.sort(function(a, b) {
        return a[1] > b[1] ? 1 : -1;
    })
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

num = 1
lim = t[0][1];

console.error(t)

t.forEach((a, b) => {
    if (lim < a[0]) {
        lim = a[1];
        num++
    }
});

console.error(m.map((a, b) => a + "/n"))

console.log(num);