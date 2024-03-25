nota1 = float(input("Digite a nota 1 do aluno: "))
nota2 = float(input("Digite a nota 2 do aluno: "))
conceito = str
situacao = str
media = (nota1 + nota2) / 2


if(media <= 3.9):
    conceito = "E"
elif(media <= 5.9):
    conceito = "D"
elif(media <=  7.4):
    conceito = "C"
elif(media <=  8.9):
    conceito = "B"
else:
    conceito = "A"

if( conceito == "A" or conceito == "B" or conceito == "C"):
    situacao = "APROVADO!"
else:
    situacao = "REPROVADO!"
print("Nota 1:", nota1)
print("Nota 2:", nota2)
print("Média do aluno: ", media)
print("Conceito do aluno: ", conceito)
print(situacao)