"""
Escribir un programa que solicite ingresar 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.
"""

x=1
cantMayor=0
cantMenor=0

while x <= 10:
    nota = int(input("Ingrese nota: "))
    if nota >= 7:
        cantMayor = cantMayor + 1
    else:
        cantMenor = cantMenor + 1
    x+=1
print("Cantidad de alumnos con notas mayores o iguales a 7")
print(cantMayor)
print("Cantidad de alumons con notas menores a 7")
print(cantMenor)