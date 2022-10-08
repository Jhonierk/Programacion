"""
En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
"""

n=int(input("Cuantos empleados tiene la empresa: "))
x=1
cant1=0
cant2=0
gastos=0

while x<=n:
    sueldo = float(input("Ingrese el sueldo del empleado ",x))
    if sueldo <=300:
        cant1 +=1
    else:
        cant2+=1

    gastos+=sueldo

    x+=1

print("Cantidad de empleados con sueldos entre 100 y 300")
print(cant1)
print("cantidad de empleados con sueldos mayor a 300")
print(cant2)
print("Gastos totales de la empresa en sueldos: ")
print(gastos)