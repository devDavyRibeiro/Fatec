nome = input('Digite seu nome completo: ')
dataanasc = input("Digite a data de nascimento <DD/MM/AAAA>: ")
data = dataanasc.split('/')
palavras = nome.split()
pre_nome = palavras[0]
sobrenome = palavras[1]
print(f"Olá {pre_nome}, muito bonito seu sobrenome: {sobrenome}")
print(f"Você nasceu no dia {data[0]} no mês {data[1]} e no ano {data[2]}")
