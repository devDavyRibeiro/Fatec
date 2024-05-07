from funcoes import converter_segundos
h = int(input("Passe as horas: "))
m = int(input("Passe os minutos: "))
s = int(input("Passe os segundos: "))


print(converter_segundos(h,m,s))