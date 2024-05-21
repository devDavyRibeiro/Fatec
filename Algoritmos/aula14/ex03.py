while True:
    numero_str = input("Digite um número positivo")
    if numero_str.isdigit():
        if(int(numero_str) >= 0):
            break
soma = 0
multilicacao = 1
for i in numero_str:
    soma += int(i)
    multilicacao *= int(i)

print(f"Soma: {soma}")
print(f"Multilicação: {multilicacao}")