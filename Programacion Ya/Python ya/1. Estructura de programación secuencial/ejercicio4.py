"""
Calcular el sueldo mensual de un operario conociendo la cantidad de horas trabajadas y el valor por hora.
"""

horas_trabajadas=int(input("Ingrese horas trabajadas: "))
valor_hora=int(input("Ingrese su sueldo por hora: "))
sueldo= horas_trabajadas * valor_hora
print("El sueldo a pagar es: ")
print(sueldo)