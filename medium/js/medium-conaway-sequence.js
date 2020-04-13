//MEDIUM - https://www.codingame.com/ide/puzzle/conway-sequence
//BLOG POST: https://capo1.github.io/blog/look-and-say-sequence/
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const r = readline();
const l = parseInt(readline());

// Write an action using console.log()
// To debug: console.error('Debug messages...');

const lookAndSay = (number, r) => {
    const res = [],
        chars = (number + " ").split ` `;

    let count = 1,
        prev = chars[0];

    for (let i = 1; i < chars.length; i++) {

        next = chars[i];

        if (next === prev) {

            count++;

        } else {

            res.push(count, prev);
            prev = next,
                count = 1;
        }
    }
    return res.join(' ')
}

const lineSeq = (r, l) => {
    res = r;

    for (let i = 1; i < l; i++) {

        console.error(`iter: ${i}, res: ${res}`);
        res = lookAndSay(res, r);

    }
    return res
}

console.log(lineSeq(1, 4))