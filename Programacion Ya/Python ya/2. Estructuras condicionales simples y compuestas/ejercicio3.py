"""
Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno o dos dígitos.
(Tener en cuenta que condición debe cumplirse para tener dos dígitos un número entero)
"""
valor=int(input("Ingrese un valor comprendido entre 1 y 99: "))
if(valor>=10):
    print("Tiene 2 digitos")
else:
    print("Es de un digito:")