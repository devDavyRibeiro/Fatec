with open('idades.txt','r',encoding='utf-8') as arquivo:
    linhas = arquivo.readlines()

idades = []
sexos = []
total_idade = 0
for linha in linhas:
    campos = linha.split(",")
    print(campos)
    idade = int(campos[0])
    sexo = campos[1]
    idades.append(idade)
    sexos.append(sexo[0])
    total_idade += idade

n_f, n_m, total_idade_f, total_idade_m = 0, 0, 0, 0
for i in range(len(idades)):
    if sexos[i] == 'F':
        n_f += 1
        total_idade_f += idades[i]
    else:
        n_m += 1
        total_idade_m += idades[i]
media_m = total_idade_m / n_m
media_f = total_idade_f / n_f
media_mf = total_idade / len(idades)
print(f'Idade Média das Mulheres: {media_f:.2f}')
print(f'Idade Média dos Homens: {media_m:.2f}')
print(f'Idade Média Total: {media_mf:.2f}')