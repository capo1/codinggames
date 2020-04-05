<?php
//HARD - https://www.codingame.com/ide/puzzle/super-computer
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

fscanf(STDIN, "%d", $N);
for ($i = 0; $i < $N; $i++)
{
    fscanf(STDIN, "%d %d", $J, $D);
    $m[]=[$J,$J+$D-1];
}

// Write an action using echo(). DON'T FORGET THE TRAILING \n
// To debug (equivalent to var_dump): error_log(var_export($var, true));
usort($m,function($a,$b){
    return $a[1]>$b[1];
});

error_log(var_export($m, true));


$num = 1;
$lim = $m[0][1];

foreach ($m as $item){
    if($lim<$item[0]){
        $lim=$item[1];
        $num++;
    }
}
echo($num);
?>