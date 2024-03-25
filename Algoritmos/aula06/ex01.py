num = int(input("Digite um número qualquer: "))
if(num % 3 == 0 and num % 5 == 0):
    print(f"{num} é divisível por 3 e por 5")
else:
    print(f"{num} não é divisível por 3 e por 5")