print("ACME Inc.           Uso do espaço em disco pelos usuários")
print('----------------------------------------------------------')
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
    total += 1
for i in range(len(nomes)):



