# EASY: https://www.codingame.com/training/easy/chuck-norris

import re
b=[bin(ord(c))[2:].zfill(7) for c in input()]
regex = r"(.)\1*"
test_str = "".join(b)
subst = ""
str=''
result = re.finditer(regex,test_str)
for match in result:
    x=match.group()
    str += '00 ' if x[0]=='0' else '0 '
    str +="".zfill(len(x))+' '
print(str.strip())