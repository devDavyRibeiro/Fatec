litros = float(input("Quantidade de litros vendidos: "))
tipo = input("Tipo do combustível (A -> Álcool, G -> Gasolina): ").upper()

if (tipo == "A"):
    preco = 1.9
    if(litros <= 20):
        p_litro = litros * (preco * 0.03)
        v_pagar = p_litro * litros
    else:
        p_litro = litros * (preco * 0.05)
    v_pagar = p_litro * litros
    print(f"Valor a pagar por {litros} litros de álcool: R$ {p_litro:.2f}")
    print(f"Valor a ser pago pelo cliente:               R$ {v_pagar:.2f}")
elif (tipo == "G"):
    preco = 2.5
    if(litros <= 20):
        p_litro = litros * preco * 0.04
    else:
        p_litro = litros * preco * 0.06
    v_pagar = p_litro * litros
    print(f"Valor a pagar por {litros} litros de gasolina: R$ {p_litro:.2f}")
    print(f"Valor a ser pago pelo cliente:                 R$ {v_pagar:.2f}")