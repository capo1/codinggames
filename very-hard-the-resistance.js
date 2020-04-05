//VERY HARD - https://www.codingame.com/ide/puzzle/the-resistance
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = readline();
const N = parseInt(readline());
const codedWords = [];
const codes = [
    ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....",
    "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
    "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
    "-.--", "--.."
];

const toMorse = function(str) {
    return str.split ``.map((a, b) => codes[a.toUpperCase().charCodeAt() - 65]).join ``
}

for (var i = 0; i < N; i++) {
    codedWords[i] = toMorse(readline());
}

counter = new Array(L.length + 1).fill(0)
counter[0] = 1

for (let position in counter) {
    count = counter[position]
    if (count) {
        for (word of codedWords) {
            if (L.startsWith(word, position)) {
                counter[position * 1 + word.length] += count
            }
        }
    }
}

console.error(counter[counter.length - 1]);
console.log(counter[counter.length - 1]);