"""
Cargar una oración por teclado. Mostrar luego cuantos espacios en blanco se ingresaron. Tener en cuenta que un espacio en blanco es igual a
" ", en cambio una cadena vacía es ""
"""
"""
palabra=input("Por favor ingrese una oracion: ")

cant=0
x=0

while x < len(palabra):
    if palabra[x] == " ":
        cant += 1
    
    x+=1

print("La cantidad de espacios es de: "+str(cant))

"""

palabra=input("Por favor ingrese una oracion: ")

cant = 0


for x  in range (len(palabra)):
     if palabra[x] == " ":
        cant += 1

print("La cantidad de espacios es de: "+str(cant))