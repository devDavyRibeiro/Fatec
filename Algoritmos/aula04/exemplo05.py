from math import pow,sqrt

print("Calcular a distância de 2 pontos(a e b)")
x1 = float(input("Digite o eixo x do ponto a: "))
y1 = float(input("Digite o eixo y do ponto a: "))
x2 = float(input("Digite o eixo x do ponto b: "))
y2 = float(input("Digite o eixo y do ponto b: "))

dx = x2 - x1
dy = y2 - y1

dist = sqrt(pow(dx,2) + pow(dy,2))

print('A distância do ponto e b é de ', dist)