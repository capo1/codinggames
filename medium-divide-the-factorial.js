//MEDIUM - https://www.codingame.com/ide/puzzle/divide-the-factorial

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const A = parseInt(inputs[0]);
const B = parseInt(inputs[1]);

// Write an action using console.log()
// To debug: console.error('Debug messages...');
function getPrimeFactors(n) {
    const p = [];
    for (let f = 2; f <= n; f++) {
        while ((n % f) === 0) {
            p.push(f);
            n /= f;
        }
    }
    let a = [];
    p.forEach(function(x) {
        a[x] = [x, 0]
        a[x][1] = p.filter(el => el === x).length
    });
    return a.filter(Boolean);
}

function legrandsNumber(a1, a2, B) {
    let t = 1;
    x = 0;
    while (t < B) {
        t *= a1;
        x += Math.floor(B / t);
    }
    return x / a2;
}

primesFactors = getPrimeFactors(A);

console.error('A=', A, 'B=', B, 'primesFactors', primesFactors);

let t = primesFactors.map((a, b) => legrandsNumber(a[0], a[1], B))
console.error(t)
console.log(Math.floor(Math.min(...t)));