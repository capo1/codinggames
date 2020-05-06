<?php
// EASY: https://www.codingame.com/ide/puzzle/power-of-thor-episode-1
fscanf(STDIN, "%d %d %d %d", $lightX, $lightY, $initialTx, $initialTy);
fscanf(STDIN, "%d", $remainingTurns);

while (TRUE){
    $moveWE = $lightX - $initialTx;
    $moveSN = $initialTy - $lightY ;

  if ($moveSN === 0) $initialTx += 1;
  
  else if ($moveWE === 0) $initialTy += 1;
  
  else{
      $initialTx += $moveWE > 0 ? -1 : 1;
      $initialTy += $moveSN > 0 ? -1 : 1;
  }
 
    echo ($moveSN > 0 ? 'N' : ($moveSN < 0 ? 'S' : '')) .  ($moveWE > 0 ? 'E' : ($moveWE < 0 ? 'W' : '')) ."\n";
}
?>
