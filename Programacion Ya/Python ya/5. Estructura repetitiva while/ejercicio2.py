"""
Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas.
"""

x = int(input("Ingrese cantidad de personas: "))
z= 1
cantAltura = 0
while z <= x:
    altura = float(input("Por favor ingrese altua: "))
    cantAltura += altura

    promedio = cantAltura / x
    
    z+=1
print("El promedio de la altura de ",x," personas es: ")
print(promedio)
