"""
Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado)
"""

n = 25
x = 1
termino = 11
while x <= n:
    serie = termino* x
    print(serie)
    x+=1

