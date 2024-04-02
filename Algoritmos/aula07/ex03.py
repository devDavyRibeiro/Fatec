imc_maior = 0
imc_menor = 100
altura_media = 0
peso_medio = 0
peso_total = 0
altura_total = 0

for i in range(1,6):
    peso = float(input(f'Digite o peso em Kg da pessoa {i}: '))
    altura = float(input(f'Digite a altura em metros da pessoa {i}: '))

    peso_total += peso
    altura_total += altura

    imc = peso / altura ** 2

    if(imc > imc_maior):
        imc_maior = imc
    if(imc < imc_menor):
        imc_menor = imc

peso_medio = (peso_total / i)
altura_media = (altura_total/ i)

print(f"A altura média foi de {altura_media:5.2f}m")
print(f"O peso médio foi de {peso_medio:5.2f}Kg")
print(f"o maior IMC foi de {imc_maior:5.2f}")
print(f"o menor IMC foi de {imc_menor:5.2f}")

