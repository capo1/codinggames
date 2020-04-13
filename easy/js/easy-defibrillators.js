//EASY - https://www.codingame.com/ide/puzzle/defibrillators


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const userLocation = { lon: readline(), lat: readline() }
const N = parseInt(readline());
const defibrilattors = [];
for (let i = 0; i < N; i++) {
    let m = ['id', 'name', 'address', 'phone', 'lon', 'lat'];
    defibrilattors[i] = readline()
        .split(';')
        .reduce((a, b, c) => {
            a[m[c]] = b
            return a;
        }, {});
}
console.error(userLocation, defibrilattors)
    // Write an answer using console.log()
    // To debug: console.error('Debug messages...');
function closestLocation(targetLocation, locationData) {

    function vectorDistance(dx, dy) {
        return Math.sqrt(dx * dx + dy * dy);
    }

    function toNumber(string) {
        return parseFloat(string.replace(',', '.'))
    }


    function locationDistance(location1, location2) {
        var dx = toNumber(location1.lon) - toNumber(location2.lon),
            dy = toNumber(location1.lat) - toNumber(location2.lat);
        return vectorDistance(dx, dy);
    }

    return locationData.reduce(function(prev, curr) {
        var prevDistance = locationDistance(targetLocation, prev),
            currDistance = locationDistance(targetLocation, curr);
        return (prevDistance < currDistance) ? prev : curr;
    });
}

console.log(closestLocation(userLocation, defibrilattors)['name'])