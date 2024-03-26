largura = float(input("Digite a largu do aposento: "))
comprimento = float(input("Digite o comprimento do aposento: "))
qlitros = int(input("Digite a quantidade de litros de lata de tinta: disponíveis: "))
altura = 2.80

#comprimento * altura
cxh = comprimento * altura

#largura * altura
lxh = comprimento * altura

# soma das quatro paredes menos a porta
area_total = (cxh * 2) + (lxh * 2) - (0.8 * 2.1)

lnecessario = area_total / 3

if(qlitros < lnecessario):
    nlitro = lnecessario - qlitros
    print(f"Quantidade de litros insuficientes.")
    print(f"Você precisará de {round(nlitro)} de latas de tinta de 1l")
    if(nlitro / 3.7 >= 3.7):
        print(f"Ou {round(nlitro / 3.7)} galões de 3.7 l")
    if(nlitro /18 >= 18):
        print(f"Ou {(nlitro / 18)} latões de 18 l")
else:
    print("Quantidade de litros suficientes")