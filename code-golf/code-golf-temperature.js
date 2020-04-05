// https://www.codingame.com/ide/puzzle/temperature-code-golf -code size: 63
s = readline;
s()
print(s().split ` `.sort((a, b) => a * a - b * b || b)[0] | 0)