n_frase = ""
frase = input("Digite uma frase: ").strip().lower()
n = frase.split()
for letra in n:
    n_frase += letra

if(n_frase[::-1] == n_frase):
    print("A frase é um palíndromo")
else:
    print("A frase não é um palíndromo")