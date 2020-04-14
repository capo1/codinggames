#MEDIUM: https://www.codingame.com/training/medium/sum-of-divisors

import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())

# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)
print(sum([math.floor(n/i) * i  for i in range(1,n+1)]))