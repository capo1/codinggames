<?php
//EASY: https://www.codingame.com/ide/puzzle/sudoku-validator

$rows =[];
$subgrids = [];
$subgrid_length = 3;

for ($i = 0; $i < 9; $i++){
    $inputs = explode(" ", fgets(STDIN));
    
    # create subgrid 3x3
    foreach ($inputs as $j => $cell) {
        $subgrids[
            floor($i / $subgrid_length) * $subgrid_length
            + floor($j / $subgrid_length)
        ][] = $cell;
    }
    array_push($rows,$inputs);    
}

function columns_to_rows($array) {
    array_unshift($array, null);
    return call_user_func_array('array_map', $array);
}

function check_set_length($set,$len){
  //return count(array_flip($set)) === $len;
    return count(array_unique($set)) === $len;
}

function check_sudoku($rows, $subgrids){
    $cols = columns_to_rows($rows);
    $grid_length = 9;
    $results = [];

    # check all array are same length - becouse of one foreach under
    if(count(array_unique([count($rows),count($subgrids),count($cols)]))!==1){
       return 0; 
    }

    foreach($rows as $key => $row){
        array_push($results,(int)check_set_length($row, $grid_length));
        array_push($results,(int)check_set_length($cols[$key], $grid_length));
        array_push($results,(int)check_set_length($subgrids[$key], $grid_length));
    }
    
    return (array_filter($results) == $results && $results)*1;
}

$answers=["false", "true"];
echo($answers[check_sudoku($rows, $subgrids)]);
?>
