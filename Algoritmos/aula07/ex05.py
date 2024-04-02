termo = 0
while(termo <= 0):
    termo = int(input("Você quer a série de fibonacci até qual termo: "))
    if(termo <= 0):
        print('O termo deve ser positivo')

primeiro = 0
segundo = 1

for i in range(1,termo):
    print()