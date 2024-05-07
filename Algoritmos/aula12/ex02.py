def is_primo(numero):
    divisivel = 0
    for i in range(1,numero):
        if (numero % i == 0):
             divisivel += 1
        if divisivel > 2:
            return False
    return True

num = int(input("Digite um número: "))
if(is_primo(num)):
    print(f"Número {num} é um número primo")
else:
    print(f"Número {num} não é um número primo")