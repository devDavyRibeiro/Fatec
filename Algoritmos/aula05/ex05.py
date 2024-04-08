ano = int(input("Informe um ano: "))

if(ano % 4 == 0):
    if(ano % 100 != 0):
        print(f"O ano de {ano} é um ano bissexto!")
    elif (ano % 400 == 0):
        print(f"O ano de {ano} é um ano bissexto!")
    else:
        print("O ano de ", ano, " não é um ano bissexto!")
else:
    print("O ano de ", ano," não é um ano bissexto!")