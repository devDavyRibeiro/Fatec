n = int(input("Digite um número: "))
e = 0
for i in range(1, n+1):
    e = (2 ** i) + e
print(f"Valor total E é igual a {e}")

e = 0
i = 1

while i <= n:
    e += 2 ** i
    i += 1
print(f"Valor total de E é {e}")