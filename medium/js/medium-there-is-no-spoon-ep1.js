//MEDIUM - https://www.codingame.com/training/medium/there-is-no-spoon-episode-1
/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
let coord = [];
let output = [];

for (let y = 0; y < height; y++) {

    let line = readline(); // width characters, each either 0 or .

    coord.push(line.split ``);
}

const checkElExist = function(coord, x, y, direction = false) {

    let points = '';

    if (!coord[x] || coord[x][y] == 'undefined')

        points += ' -1 -1';

    else if (coord[x][y] >= '0')

        points += ` ${y} ${x}`;

    else if (coord[x][y] == '.')

        points += direction == 'rigth' ?
        checkElExist(coord, x, y + 1, direction) :
        checkElExist(coord, x + 1, y, direction);

    else
        points += ' -1 -1';

    return points;
}


coord.map((el, i) => el.map((x, y) => {

    if (x == '.') return;

    let points = checkElExist(coord, i, y);
    points += checkElExist(coord, i, y + 1, 'rigth');
    points += checkElExist(coord, i + 1, y, 'b');

    output.push(points);
}));

// Write an action using console.log()
// To debug: console.error('Debug messages...');
console.log(output.join `\n`)

// Three coordinates: a node, its right neighbor, its bottom neighbor