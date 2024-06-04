
with open('usuarios.txt','r') as arquivo:
    linhas = arquivo.readlines()

nomes = []
n_bytes = []
total = 0
for linha in linhas:
    campos = linha.split()
    nome = campos[0]
    n_byte = int(campos[1])/(1024 * 1024)
    nomes.append(nome)
    n_bytes.append(n_byte)
    total += n_byte

print("ACME Inc.           Uso do espaço em disco pelos usuários")
print('----------------------------------------------------------')
print(f'Nr.    Usuario               Espaço utilizado              % de uso')
for i in range(len(nomes)):
    print(f'{i+1}    {nomes[i]}               {n_bytes[i]:.2f}MB              {((n_bytes[i]/total)*100):.2f}%')

print(f'Total ocupado: {total}MB')
print(f'Espeço Médio Ocupado: {(total/len(nomes)):.2f}MB')