
# EASY: https://www.codingame.com/ide/puzzle/sudoku-validator

lines = []
grid_length = 9
sub_grid_length = 3
sum_digits = 45

lines = [list(map(int, input().split())) for _ in range(9)]

# compare set length with grid length
# return uf length of set is or is not equal to length: default should be 9
def compare(Set, length):   
    return len(Set) == length

# split grid in 3x3 chunks and sum elements 
def get_chunk(obj,start_x,start_y,sub_grid_length):
    sublist = []
    for x in range(start_x, start_y + sub_grid_length):
        sublist.append(sum(obj[x][start_y:start_y + sub_grid_length]))
    return sublist

# check sudoku
def check_sudoku(row):   
    # get columns to rows
    columns = [*zip(*row)] 
    results = []

    # check rows by set
    for i in row:       
        r = set(i)
        results.append(compare(r, grid_length))
    
    # check columns by set
    for i in columns:
        r = set(i)
        results.append(compare(r, grid_length))
    
    # check 3x3 grid by sum
    for i in range(0, grid_length, sub_grid_length):
        results.append(sum(get_chunk(row, i, i, sub_grid_length)) == sum_digits)
   
    # return if all test are True
    return all(results)

answers = ["false", "true"]
print(answers[check_sudoku(lines)])

