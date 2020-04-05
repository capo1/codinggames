#MEDIUM -https://www.codingame.com/training/medium/there-is-no-spoon-episode-1

import sys
import math

# Don't let the machines win. You are humanity's last hope...
coords=[]
res=''

l = ['0 0 1 0 0 1', '1 0 -1 -1 -1 -1', '0 1 -1 -1 -1 -1' ]

width = int(input())  # the number of cells on the X axis
height = int(input())  # the number of cells on the Y axis
for i in range(height):
    line = input()  # width characters, each either 0 or .
    
    coords.append([y for y in line ])

def checkElemExist(el,x,y,direction):
    
     points =''

     try:
         el[x]
         el[x][y]
     except:
         points += ' -1 -1'
         return points
     
     try:
         points += f' {y} {x}'  if int(el[x][y]) >= 0 else ''
     except:
         if(str(el[x][y]) == '.'):
             points +=  checkElemExist(coords, x, y + 1, direction)  if direction == "right" else  checkElemExist(coords, x + 1, y, direction)
             
     return points
   
for i in range(len(coords)):
   
    for y in range(len(coords[i])):
        
        if coords[i][y]=='.':
            continue
        
        result = checkElemExist(coords,i,y,'')
        result += checkElemExist(coords,i,y+1,'right')
        result += checkElemExist(coords,i+1,y,'bottom')
        print(result)
    



# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)


# Three coordinates: a node, its right neighbor, its bottom neighbor

#print("0 0 1 0 0 1")