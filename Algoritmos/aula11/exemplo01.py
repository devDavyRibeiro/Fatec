lista = []
for x in range(10):
    lista.append(int(input(f"Digite o número {x+1}: ")))

t = tuple(lista)

print(t,t[::-1])