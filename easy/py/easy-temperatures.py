#EASY: https://www.codingame.com/training/easy/temperatures
input()
print((sorted(sorted(map(int,input().split()))[::-1],key=abs)[:1]+[0])[0])