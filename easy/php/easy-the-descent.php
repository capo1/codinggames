<?php
// EASY: https://www.codingame.com/training/easy/the-descent

$mountainHeight = [];
while (TRUE) {
    for ($i = 0; $i < 8; $i++) {
        fscanf(STDIN, "%d", $mountainH);
        $mountainHeight[$i] = $mountainH;
    }
    echo array_keys($mountainHeight, max($mountainHeight))[0] . "\n";
}
