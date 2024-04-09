data = input("Digite uma nata neste formato <DD/MM/AAAA>")
info = data.split("/")
dia = info[0]
mes = info[1]
ano = info[2]
data_contraria = ano + "/" + mes + "/" + dia
print(f"A data informada no formato <DD/MM/AAAA>: {data_contraria}")