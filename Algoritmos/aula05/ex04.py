import math
a = int(input("Valor de A: "))
b = int(input("Valor de B: "))
c = int(input("Valor de C: "))

delta = b ** 2 - 4 * a * c

if(a != 0):
    if(delta < 0):
        print("Essa equação não possui valores reais")
    elif(delta == 0):
        x = -b / (2*a)
        print("Essa equação possui uma raíz. O valor de X = ", x)
    else:
        raiz = math.sqrt(delta)
        x_neg = (-b - raiz) / (2 * a)
        x_pos = (-b + raiz )/ (2 * a)

        print("Essa equação possui duas raízes. São elas: (", x_pos,", ", x_neg, " )")
else:
    print("A função não é de segundo grau, pois o valor de A é igual a 0")

