a = int(input("Digita o lado a do triângulo: "))
b = int(input("Digita o lado b do triângulo: "))
c = int(input("Digita o lado c do triângulo: "))

if(a + b < c) or (a + c < b) or (b + c < a):
    print("Sinto muito. Valores apresentados não formam um triângulo")
else:
    if(a != b) and (a != c) and (b != c):
        print("Os valores apresentados formam um triângulo escaleno")
    elif (a == b) and (a != c):
        print("Os valores apresentados formam um triângulo isósceles")
    else:
        print("Os valores apresentados formam um triângulo equilátero")
