frase = input("Digite uma frase: ").upper()
contador = 0
for char in frase:
    if char in 'AEIOUÁÉÍÓÚÀÃÕ':
        contador = contador + 1
print(f"Existem {contador} vogais na frase")