from random import randint

m = []
l = []
soma = 0
for y in range(4):
    for x in range(4):
        l.append(randint(1,100))
    m.append(l)
    l = []
print(m)

for i in range(4):
    soma += m[i][i]
print(f'{soma=} ')