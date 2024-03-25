salario_atual = float(input("Digite seu salário: "))
percentual = float(input("Digite o percentual do aumento: "))
aumento = salario_atual * (percentual/100)
novo_salario = salario_atual + aumento
print(f"Salário atual: R${salario_atual:8.2f}")
print(f"Aumento de     R${aumento:8.2f}")
print("-----------------------------------------")
print(f"Novo salário   R${novo_salario:8.2f}")