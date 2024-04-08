num = int(input("Digite um número maior que zero e menor que 1000: "))
extensao = ""
if(num < 1000 and num >= 0):
    verifica = num // 100
    if(verifica != 0):
        if(verifica == 1):
            extensao = "1 centena, "
        else:
            extensao = str(verifica) + " centenas, "

        n_num = num % 100
        verifica = n_num // 10

        if(verifica == 1):
            extensao += " 1 dezena e "
        else:
            extensao += str(verifica) + " dezenas e "

        verifica = n_num % 10
        if(verifica == 1):
            extensao += "1 unidade"
        else:
            extensao += str(verifica) + " unidades"

    else:
        verifica = num // 10
        if(verifica != 0):

            if (verifica == 1):
                extensao += " 1 dezena e "
            else:
                extensao += str(verifica) + " dezenas e "

            verifica = num % 10

            if (verifica == 1):
                extensao += "1 unidade"
            else:
                extensao += str(verifica) + " unidades"
        else:
            if (num == 1):
                extensao += "1 unidade"
            else:
                extensao += str(num) + " unidades"

else:
    print("ERRO. Número deve ser maior que 0 e menor do que 1000")
print(extensao)