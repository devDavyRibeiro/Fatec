vhora = float(input("Digite o valor da hora do seu trabalho: "))
quanti_horas = int(input("Digite a quantidade de horas trabalhadas: "))

salario_bruto = vhora * quanti_horas
inss = salario_bruto * 0.1

if(salario_bruto > 900):
    if(salario_bruto <= 1500):
        ir = salario_bruto * 0.05
        aliquota = 5
    elif(salario_bruto <= 2500):
        ir = salario_bruto * 0.1
        aliquota = 10
    else:
        ir = salario_bruto * 0.20
        aliquota = 20
else:
    ir = 0.0
    aliquota = 0
impost_sindical = salario_bruto * 0.03
fgts = salario_bruto * 0.11
total_desc = inss + ir
salario_liquido = salario_bruto - total_desc

print("Salário Bruto (", vhora, " * ", quanti_horas, " )   : R$", salario_bruto )
print("(-) IR (", aliquota,"%)   :R$", ir)
print("(-) INSS (10% )   : R$",inss)
print("FGTS (11%)   :R$",fgts)
print("Total de descontos   :R$",total_desc)
print("Salário Líquido   :R$",salario_liquido)