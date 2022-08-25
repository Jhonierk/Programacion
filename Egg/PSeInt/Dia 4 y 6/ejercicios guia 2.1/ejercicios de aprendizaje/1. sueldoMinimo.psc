//Un hombre desea saber si su sueldo es mayor al sueldo mínimo, el programa le pedirá al
//usuario su sueldo actual y el sueldo mínimo. Si el sueldo es mayor al mínimo se debe
//mostrar un mensaje por pantalla indicándolo.

Algoritmo ejercicio1
	
	definir sueldoM, sueldoUser Como Real
	
	sueldoM = 240
	
	escribir"Por favor digite su sueldo actual: "
	leer sueldoUser
	
	si sueldoUser > sueldoM entonces
		escribir"Su sueldo esta por encima del minimo que es: $",sueldoM," En dolares, y su sueldo actual es de: ",sueldoUser
	SiNo
		escribir"Su sueldo esta por debajo del minimo que es: $",sueldoM," En dolares, y su sueldo actual es de: ",sueldoUser
	FinSi
	
	
	
FinAlgoritmo
