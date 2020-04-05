#CODE GOLF - https://www.codingame.com/ide/puzzle/temperature-code-golf
i=input,i()
print(min(i().split()or'0',key=lambda a:abs(int(a)-.1)))