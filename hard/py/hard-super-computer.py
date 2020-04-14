# HARD - https://www.codingame.com/ide/puzzle/super-computer 
import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
m=[]
n = int(input())
for i in range(n):
    j, d = [int(j) for j in input().split()]
    m.append([j,j+d-1])
    

# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)
m.sort(key=lambda x: x[1])
num=1
lim=m[0][1]
for i in range(n):
 
    if(lim < m[i][0]):
        lim = m[i][1]
        num += 1
print(num)