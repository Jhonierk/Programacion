"""
Solicitar el ingreso de una clave por teclado y almacenarla en una cadena de caracteres. 
Controlar que el string ingresado tenga entre 10 y 20 caracteres para que sea válido, 
en caso contrario mostrar un mensaje de error.
"""

clave=input("Por favor digite la clave: ")
if len(clave) >= 10 and len(clave) <= 20:
    print("Su clave ha guardado con exito")
else:
    print("Su clave debe tener mas de 10 y menos de 20 caracteres")