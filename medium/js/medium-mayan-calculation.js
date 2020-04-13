//MEDIUM - https://www.codingame.com/ide/puzzle/mayan-calculation

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const L = parseInt(inputs[0]);
const H = parseInt(inputs[1]);

console.error("L=", L, 'H=', H)

const chunkString = (str, length) => {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
}
const base20 = (number, result) => {
    result = result || []
    number / 20 | 0 ? (base20(number / 20 | 0, result), base20(number % 20, result)) : result.push(number)
    return result
}
const setNumber = (loopLength, lineLength, numberArrayRepresentation) => {
    let y = 0;
    const variable = [];

    for (let i = 1; i <= loopLength; i++) {
        if (!variable[y]) variable[y] = '';
        variable[y] += readline();
        if (i % lineLength == 0) y++
    }
    return getMayanNumberToTen(variable, numberArrayRepresentation)
}
const getMayanNumberToTen = (lineArray, numberArrayRepresentation) => {
    const result = [];
    lineArray.reverse().map((a) => {
        result.push(numberArrayRepresentation.indexOf(a))
    });

    return result.reduce((a, b, c) => {
        let num = b * Math.pow(20, c);
        return a + num
    }, 0)
}
const setNumberRepresentation = (H, L) => {
    let numeral = [],
        result = [];

    for (let i = 0; i < H; i++) {
        numeral[i] = chunkString(readline(), L);
    }
    numeral.map((a) => {
        a.map((b, c) => {

            if (!result[c]) result[c] = []
            result[c].push(b)
        })
    });
    return result.map((a) => a.join ``);
}

const mayanToNumbersArray = setNumberRepresentation(H, L);
console.error("mayanToNumbersArray", mayanToNumbersArray)

const S1 = parseInt(readline());
const num1 = setNumber(S1, L, mayanToNumbersArray);

const S2 = parseInt(readline());
const num2 = setNumber(S2, L, mayanToNumbersArray);

const operation = readline();

console.error('num1=', num1, 'num2=', num2)

const resultOfOperation = eval(num1 + operation + num2)

console.error('op:', num1, operation, num2, '=', resultOfOperation)

base20(resultOfOperation)
    .map((a) => {
        return chunkString(mayanToNumbersArray[a], L)
    })
    .map((a) => {
        console.log(a.join `\n`)
    })