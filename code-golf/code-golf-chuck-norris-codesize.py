# https://www.codingame.com/ide/puzzle/chuck-norris-codesize - code size: 139
b,r,p=[int(l) for x in input() for l in f"{ord(x):07b}"],'',2 
for c in b:
 r+=(" %s 0"%(['00','0'][bool(c)]),'0')[c==p]
 p=c
print(r[1::1])