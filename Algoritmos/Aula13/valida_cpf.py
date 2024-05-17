def validar_cpf(cpf = str):
    if len(cpf) == 11 and str.isdigit(cpf):
        soma = 0
        resto = 0

        nove_digitos = cpf[0:9]
        primeiro_verificador = (cpf[9:10])
        segundo_verificador = (cpf[10:11])
        descrescente = 11

        for i in nove_digitos:
            soma_antiga = soma
            descrescente -= 1
            soma += (int(i) * descrescente)
            print(f'{soma} = {i} * {descrescente} + {soma_antiga}')

        resto = soma % 11
        print(resto,primeiro_verificador)
        if resto < 2 and int(primeiro_verificador) == 0:
            pass
        else:
            if 11-resto == int(primeiro_verificador):
                pass
            else:
                return False

        soma = 0
        resto = 0
        descrescente = 12

        for i in nove_digitos + primeiro_verificador:
            descrescente -= 1
            soma += (int(i) * descrescente)
        resto = soma % 11
        if resto < 2 and int(segundo_verificador) == 0:
            return True
        else:
            if 11-resto == int(segundo_verificador):
                return True

    else:
        return False
nCPF = "48524893869"
print(validar_cpf(nCPF))