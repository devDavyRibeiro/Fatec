lista = []
for i in range(5):
    v = int(input(f"Digite um número {i}: "))
    lista.append(v)

maximo = max(lista)
id = lista.index(maximo)

print(f"O maior valor é {maximo} que esta na posição {id}")
