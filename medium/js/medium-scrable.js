// MEDIUM : https://www.codingame.com/ide/puzzle/scrabble

//check how many letters exist in word
function countLetters(word) {
  let h = {};
  word.split``.map(a => h[a] = (h[a] || 0) + 1 )
  return h;
}

//make object like e:1,a:1,d:2...
const pointsTable = function(object = {
    1 : 'eaionrtlsu', 2 : 'dg', 3 : 'bcmp', 
    4 : 'fhvwy',      5 : 'k',  6 : 'jx',   10 : 'qz'}) {
  let temp = {}
  Object.keys(object).forEach(c => object[c].split``.forEach(b => temp[b ]= c * 1))
  return temp;
}();

const dict = [...new Array(+readline())].map(e => readline());
const letters = countLetters(readline());
const words = dict.map((a,b) => countLetters(a));

// count points if dict letter is in letters
// and num of letters to use is in word
// and word length has matter
// else degradate the word to end with value -100
let points = dict.map((a,c) =>    
        [...new Set([...a.split``])].reduce((a,b) => 
        a += b in letters && letters[b] >= words[c][b] ? 
             words[c][b] * pointsTable[b] + Object.keys(words[c]).length/100 : 
             -100
        , 0) //end reduce
    );

console.error('dict',dict,'\nletters', letters,'\nwords', words);
console.error('\npoints', points);

//get the index of max point word
console.log(dict[points.indexOf(Math.max(...points))]);
