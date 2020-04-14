#EASY: https://www.codingame.com/training/easy/happy-numbers
import sys
import math

def imHappy(n) : 
    while (1) : 
        if (n == 1) : 
            return 1
        n = sum([int(i) ** 2 for i in str(n)]) 
        if (n == 4) : 
            return 0
    
n = int(input())
for i in range(n):
    x = input()
    print(x+" :)") if imHappy(int(x)) else print(x+" :(") 