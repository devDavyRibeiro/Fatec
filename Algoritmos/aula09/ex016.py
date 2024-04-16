from random import randint
m = []
l = []
soma = 0
for y in range(5):
    for x in range(5):
        l.append(randint(1,100))
    m.append(l)
    l = []
print(m)

soma = 0
qtd = 0
for i in range (0,5,2):
    for x in range (5):
        soma += m[i][x]
        qtd += 1
print(f'A média dos números pares: {soma/qtd:6.2f}')