//EASY: https://www.codingame.com/training/easy/power-of-thor-episode-1

var inputs = readline().split(" ");
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  let moveWE = lightX - initialTx;
  let moveSN = initialTy - lightY;

  if (moveSN === 0) initialTx += 1;
  else if (moveWE === 0) initialTy += 1;
  else (initialTx += moveWE > 0 ? -1 : 1), (initialTy += moveSN > 0 ? -1 : 1);

  console.log(
    (moveSN > 0 ? "N" : moveSN < 0 ? "S" : "") +
      (moveWE > 0 ? "E" : moveWE < 0 ? "W" : "")
  );
}
