//Un hombre desea saber si su sueldo es mayor al sueldo m�nimo, el programa le pedir� al
//usuario su sueldo actual y el sueldo m�nimo. Si el sueldo es mayor al m�nimo se debe
//mostrar un mensaje por pantalla indic�ndolo.

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
