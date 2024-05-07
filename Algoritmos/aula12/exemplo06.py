def tem_igual(*args):
    for i in range(len(args)-1):
        for j in range(i+1,len(args)):
            if args[i] == args[j]:
                return True
    return False

print(tem_igual(1,3,6,5,4,7,9))
