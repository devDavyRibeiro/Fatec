from random import randint
resultados = [0]*7
freq = [0]*7
for _ in range(1,6001):
    lado = randint(1,6)
    resultados[lado] = resultados[lado] + 1

   # resultados.append(lado) minha resolução

for i in range(1,7):
    freq[i] = (resultados[i]/ 6000) * 100
   # print(f"Frequência na face {i}: {resultados.count(i)/6000*100:2.2f} %") minha resolução

for i in range(1,7):
    print(f'{i} - {resultados[i]} - {freq[i]:6.2f}%')