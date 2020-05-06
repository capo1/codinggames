<?php
//EASY: https://www.codingame.com/ide/puzzle/temperatures

fgets(STDIN);
$i=array_map('intval',explode(' ',fgets(STDIN)));
usort($i,function($a,$b){ return abs (1-$a)  - abs(1-$b);});
print($i[0]);
?>
