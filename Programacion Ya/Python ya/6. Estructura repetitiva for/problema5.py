"""
Escribir un programa que solicite por teclado 10 notas de alumnos y nos 
informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.
"""

cantMayor = 0
cantMenor = 0
rango = int(input("Por favor ingresar cantidad de notas: "))

for x in range(rango):
    nota = int(input("Por favor digite nota en posicion: "+ str(x) + " : "))
    if nota >= 7:
        cantMayor += 1
    else:
        if nota < 7:
            cantMenor += 1
        else:
            print("Error")

print("Cantidad de notas ingresadas: "+ str(rango))
print("Cantidad superior o igual a 7: "+ str(cantMayor))
print("Cantidad inferior a 7: "+ str(cantMenor))