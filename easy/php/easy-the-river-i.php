<?php
//EASY: https://www.codingame.com/training/easy/the-river-i-

fscanf(STDIN, "%d", $r1);
fscanf(STDIN, "%d", $r2);

$a = $r1;
$b = $r2;

function sum($i)
{
    return array_sum(str_split($i)) + $i;
}

while ($a != $b) {
    $a > $b ?
        $b = sum($b) :
        $a = sum($a);
}

echo $a;
