print('Convertor de Celsos para Fahrenheit e Fahrenheit para Celsos')
c = float(input("Digite o valor em graus celsos: "))
f = (9*c + 160)/5
print("A temperatura em Fahrenheit é: ", f)

print("Convertor de Fahrenheit para Celsos")
f = float(input("Digite o valor em fahrenheit: "))
c = (f * 5 - 160) / 9
print("A temperatura em Celsos é: ", c)