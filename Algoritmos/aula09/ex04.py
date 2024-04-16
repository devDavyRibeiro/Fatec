from random import randint
resultados = [0]*13
freq = [0]*13
for _ in range(1,30001):
    dado1 = randint(1,6)
    dado2 = randint(1,6)
    res = dado1 + dado2
    resultados[res] = resultados[res] + 1

   # resultados.append(lado) minha resolução

for i in range(2,13):
    freq[i] = (resultados[i]/ 30000) * 100
   # print(f"Frequência na face {i}: {resultados.count(i)/6000*100:2.2f} %") minha resolução

for i in range(2,13):
    print(f'{i} - {resultados[i]} - {freq[i]:6.2f}%')

if(freq[8] >= 1/6 ):
    print("O valor 7 aparece 1/6 das vezes")
else:
    print("O valor 7 não aparece 1/6 das vezes")