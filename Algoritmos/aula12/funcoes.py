from math import pi,pow
def converter_segundos(horas,minutos,segundos):
    segundos += (minutos * 60) + (horas * 60 * 60)
    return segundos

def volume_esfera(raio):
    return (4/3) * pi * pow(raio,3)