<?php
//MEDIUM - https://www.codingame.com/ide/puzzle/shadows-of-the-knight-episode-1
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// $W: width of the building.
// $H: height of the building.
fscanf(STDIN, "%d %d", $W, $H);
// $N: maximum number of turns before game over.
fscanf(STDIN, "%d", $N);
fscanf(STDIN, "%d %d", $X, $Y);
 // error_log(var_export($W, true));
 // error_log(var_export($H, true));
 // error_log(var_export($N, true));
// game loop
$minX=0;
$minY=0;
$maxX=$W-1;
$maxY=$H-1;
while (TRUE)
{  fscanf(STDIN, "%s", $bombDir);
    
    // $bombDir: the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
  
  //error_log(var_export($bombDir, true));
  if(strpos($bombDir,'U') !==false){
      
     $maxY=$Y-1;
  }
  else if(strpos($bombDir,'D') !==false){
      
    $minY=$Y+1;
  }
  
  if(strpos($bombDir,'L') !==false){
      
     $maxX=$X-1;
  }
  else if(strpos($bombDir,'R') !==false){
    
   $minX=$X+1;
}
   

  $X = ($minX + $maxX) >> 1;
  $Y = floor(($minY + $maxY) /2);
  
 error_log(var_export([
       'floor(('.$minY.' +'. $maxY.') /2)']  , true));
    // Write an action using echo(). DON'T FORGET THE TRAILING \n
    // To debug (equivalent to var_dump): error_log(var_export($var, true));


    // the location of the next window Batman should jump to.
    echo("$X $Y\n");
}
?>