// EASY: https://www.codingame.com/training/easy/hunger-games

let playerName = [];
let info = {};
const tributes = parseInt(readline());
for (let i = 0; i < tributes; i++) {
  playerName[i] = readline();
}
playerName.sort();

const turns = parseInt(readline());

for (let i = 0; i < turns; i++) {
  let n = readline().split` killed `;

  if (!info[n[0]]) info[n[0]] = "";
  info[n[0]] += n[1].split(", ").sort().join(", ") + ", ";
}
console.error(info);
console.error(Object.keys(info).map((a) => typeof info[a]));

let name,
  killed,
  killer = "";

playerName.map((a, b) => {
  name = a;
  killed = !info[a] ? "None" : info[a];
  killer = "Winner";

  Object.keys(info).map(function (key) {
    if (info[key].indexOf(a) >= 0 && a != key) {
      killer = key;
    }
  })[0];

  console.log("Name: " + name);
  console.log("Killed: " + killed);
  console.log("Killer: " + killer);

  if (b != playerName.length - 1) console.log("");
});
