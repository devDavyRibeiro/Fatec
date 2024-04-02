soma = 0
idade = 1
qtr = 0
while idade != -0:
    idade = int(input(f"Entre com a idade {qtr+1} (digite 0 para sair): "))
    if(idade != 0):
        soma += idade
        qtr += 1
media = soma / qtr
print(f"A média das {qtr} idades é {round(media)} anos")
