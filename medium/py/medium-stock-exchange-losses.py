#MEDIUM - https://www.codingame.com/ide/puzzle/stock-exchange-losses
import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())
t = list(int(i) for i in input().split())
print('t',t, file=sys.stderr)

m=[]
current_elem=t[0]
for next_elem in t[1:]:
    m.append(next_elem-current_elem)
    current_elem=next_elem
    
print('m', m, file=sys.stderr) 

losses=[]
losses=[m[0]]

for x in range(1,len(m)):
    prev_elem=losses[x-1]
    current_elem=m[x]
    print(x,prev_elem,current_elem, file=sys.stderr )
    losses.append(min(m[x], prev_elem+current_elem))
    current_elem=prev_elem


print('losses', losses, file=sys.stderr)    
result = list(filter(lambda x: x<0, losses))
print('result', result, file=sys.stderr)    
try:
    print(min(result))
except:
    print(0)