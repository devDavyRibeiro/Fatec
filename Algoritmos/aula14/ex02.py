def is_primo(numero = int()):
    soma = 0
    for i in range(1,numero+1):
        if(numero % i == 0):
            soma += 1
    if soma <= 2:
        return True
    elif numero == 2:
        return True
    else:
        return False


def qtd(numero):
    total = 0
    for i in range(numero):
        if is_primo(i+1) and i != 1:
            total += 1
    return total

y = 13
lista = []

for i in range(qtd(y)):
    lista.append(i)
soma_total = sum(lista)
print(f"Soma = {soma_total}")
