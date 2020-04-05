//HARD - https://www.codingame.com/ide/puzzle/genome-sequencing

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let m = []
const N = +readline();
for (let i = 0; i < N; i++) {
    m.push(readline());
}

function perm(el) {
    // return all posibilities with array words order
    let res = [];
    for (let i = 0; i < el.length; i = i + 1) {
        let rest = perm(el.slice(0, i).concat(el.slice(i + 1)));

        if (!rest.length) {
            res.push([el[i]])
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                res.push([el[i]].concat(rest[j]))
            }
        }
    }
    return res;
}

m = perm(m)

console.error(m)

function findSub(m) {
    // return length of concated string
    //get first element
    let res = m[0];
    var minLen = Infinity;

    //for all posibilities in m
    for (let i = 0; i < m.length; i++) {

        isInString = false;
        //there is no more m items, return 
        if (!m[i + 1]) {
            return Math.min(res.length, minLen);
        }

        let tmpStr = m[i + 1],
            tempStr = '';

        //check from end of string and cut one letter to front
        for (let j = tmpStr.length; j > 0; j--) {

            tempStr = tmpStr.slice(0, j);

            if (compareStr(m[i], tempStr)) {
                isInString = true;

                tmpStr = tmpStr.slice(j, tmpStr.length)
                res += tmpStr
            }
        }
        if (!isInString) res += tmpStr
    }
    //  return minLen
}


function compareStr(str1, str2) {
    // if string is only one letter, 
    // we ned to know there is on end to cut otherwise
    // check that is anywhere in compared string
    return str2.length == 1 ? str1.endsWith(str2) : str1.includes(str2)
}
m = m.map((el => findSub(el)))
console.error(m)
console.log(Math.min(...m));