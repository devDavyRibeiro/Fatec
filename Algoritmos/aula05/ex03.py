a = float(input("Coloque um número: "))
b = float(input("Coloque um outro número: "))
c = float(input("Coloque um outro número: "))
if((a+b < c) or (c+b < a) or (a+c < b)):
    print("Os valores que você colocou, não corresponde ao um triângulo")
else:
    if(a == b) and (a == c) and (b == c):
        print("São triângulos equiláteros")
