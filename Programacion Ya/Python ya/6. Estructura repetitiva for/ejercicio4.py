"""
Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la 
tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.
"""

valor = int(input("Ingrese un valor entre 1 a 10: "))

for x in range(1,13):
    tabla = valor*x
    print(str(valor)+ " X " + str(x) + " = "+ str(tabla))