<?php
//EASY: https://www.codingame.com/training/easy/happy-numbers

function isHappy($n)
{
    while (1) {
        if ($n == 1) return true;

        $n = array_reduce(str_split($n), function ($a, $b) {
            return $a + ($b * $b);
        });;

        if ($n == 4) return false;
    }
    return false;
}

fscanf(STDIN, "%d", $N);
for ($i = 0; $i < $N; $i++) {
    $x = stream_get_line(STDIN, 128 + 1, "\n");
    echo isHappy($x) ? $x . " :)\n" : $x . " :(\n";
}
