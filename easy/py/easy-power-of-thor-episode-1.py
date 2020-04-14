
# EASY: https://www.codingame.com/training/easy/power-of-thor-episode-1
import sys
import math

# Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.

# light_x: the X position of the light of power
# light_y: the Y position of the light of power
# initial_tx: Thor's starting X position
# initial_ty: Thor's starting Y position
light_x, light_y, initial_tx, initial_ty = [int(i) for i in input().split()]

# game loop
while True:
    remaining_turns = int(input())  # The remaining amount of turns Thor can move. Do not remove this line.
   
    moveWE = light_x - initial_tx
    moveSN = initial_ty - light_y

    initial_tx += 1 if moveSN == 0 or moveWE > 0 else - 1 if moveWE < 0 else 0
    initial_ty += 1 if moveWE == 0 or moveSN < 0 else - 1 if moveSN > 0 else 0

    print(("N" if moveSN > 0 else 'S' if moveSN < 0 else '') + ('E' if moveWE > 0 else 'W' if moveWE < 0 else ''))