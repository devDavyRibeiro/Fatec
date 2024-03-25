vcompra = float(input("Digite o valor da compra: "))

if(vcompra <= 1000):
    porcentagem = 10
    desconto = 0.10
elif(vcompra <= 5000):
    porcentagem = 20
    desconto = 0.20
else:
    porcentagem = 30
    desconto = 0.30

print(f"O valor com desconto foi de R${vcompra * desconto:.2f}; com o desconto de {porcentagem}%")