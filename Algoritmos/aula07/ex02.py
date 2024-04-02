n = int(input("Digite um número: "))
e = 0
i = 1
while i <= n:
    e += 2 ** i
    i += 1
print(f"Valor total de E é {e}")