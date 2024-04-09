vogais = 0
frase = input("Digite uma frase: ").lower()
for vogal in "aeiou":
    vogais + frase.count(vogal)
print(f"Existem {vogais} vogais na frase")
