#MEDIUM - https://www.codingame.com/ide/puzzle/the-gift
n = int(input())
c = int(input())
p = [0]*n

res = "IMPOSSIBLE"

for i in range(n):
    p[i] = int(input())

if(sum(p)<c):
    print(res)
else:
    p.sort()
    for b  in range(len(p)):
        res = min(p[b], (c // (n - b)) )
        print(res)
        c -= res