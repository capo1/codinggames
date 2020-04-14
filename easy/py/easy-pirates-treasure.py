# https://www.codingame.com/training/easy/pirates-treasure

import sys
import math

w = int(input())
h = int(input())
g=[None]*h

for i in range(h):
    g[i] =input().split()

def checkPos(r,c,m):
    count = 8
    if(m[r][c]!='0'):
        return False
    
    for d in range(0,9):
        if (d==4):
            continue
        
        nr = r + ((d %  3) - 1)
        nc = c + ((d // 3) - 1)
        
        if(nc < 0 or nr < 0 or nr >= len(m) or nc >= len(m[0])):
            count -=1
        
        elif(nr < len(m) and nc < len(m[0]) and m[nr][nc] == '1'):
            count -= 1
    return count==0


for i in range(w):
    for y in range(h):
        if checkPos(y,i,g):
            print(str(i)+' '+str(y))
            break