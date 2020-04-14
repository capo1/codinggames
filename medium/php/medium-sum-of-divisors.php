<?php
//MEDIUM: https://www.codingame.com/training/medium/sum-of-divisors

fscanf(STDIN, "%d", $n);
$result = 0;

for ($i = 1; $i <= $n; $i++) {
    $result += (floor($n / $i) * $i);
}
$r = range(1, $n);

print_r(array_sum(array_map(function ($a) use ($n) {
    return  floor($n / $a) * $a;
}, $r)));
