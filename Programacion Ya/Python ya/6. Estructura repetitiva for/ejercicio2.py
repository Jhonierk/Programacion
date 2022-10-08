"""
Desarrollar un programa que solicite la carga de 10 números e 
imprima la suma de los últimos 5 valores ingresados.
"""

n = 10
suma = 0
for x in range(n):
    numero = int(input("Por favor digiene numero en: "+str(x+1)+ " : "))
    if x > 4:
        suma+=numero

print("Suma de los ultimos 5 numeros: "+str(suma))