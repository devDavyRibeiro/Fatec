from random import choice
rodadas = int(input('Quantas rodadas?: '))
score_pc = 0
score_user = 0
while True:
    jogo = ('pedra','papel','tesoura')
    while True:
        escolha_user = int(input("Escolha entre pedra(0), papel(1) e tesoura(2): "))

        if(escolha_user <= 2 and escolha_user >= 0):
            break
    escolha_user = jogo[escolha_user]
    escolha_pc = choice(jogo)

    if(escolha_user == escolha_pc):
        print('Empate!')
    elif (escolha_user == 'pedra' and escolha_pc == 'tesoura') or (escolha_user == 'papel' and escolha_pc == 'pedra'
    ) or (escolha_user == 'tesoura' and escolha_pc == 'papel'):
        print('Você ganhou!')
        score_user += 1
    else:
        print('Você perdeu')
        score_pc += 1

    print(score_user, ' x ', score_pc)

    if(score_user > rodadas):
        print('VOCÊ GANHOU JOGO!')
        break
    elif(score_pc > rodadas):
        print('Você perdeu o jogo :C')
        break
