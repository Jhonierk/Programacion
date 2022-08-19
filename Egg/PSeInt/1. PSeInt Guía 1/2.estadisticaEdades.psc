//tenemos 3 edades de hermanos, calcular su promedio de edad e imprimir cuales son menores al promedio  
// calcular si los 3 hermanos tienen la misma edad y si al menos uno es mayor de edad
Algoritmo estadisticaEdades
	
	definir edad1, edad2, edad3 como entero // 5, 10 
	definir promedio Como real // ejemplo 1.5 - 3.14...........
	definir apellido Como Caracter
	definir iguales, mayorEdad como logico
	
	escribir "Ingresar apellido y 3 edades de los hermanos"
	leer apellido
	leer edad1, edad2, edad3
	
	promedio = (edad1 + edad2 + edad3) / 3
	escribir "El promedio 	de la edad de la familia: ", apellido, " es: ",promedio
	
	escribir "edad 1 (", edad1, " años) menor al promedio? ", edad1 <	promedio
	escribir "edad 2 (", edad2, " años) menor al promedio? ", edad2 <	promedio
	escribir "edad 3 (", edad3, " años) menor al promedio? ", edad3 <	promedio
	
	//  1 > 10  False
	
	iguales = (edad1 = edad2) y (edad2 = edad3)
	
	escribir "Tienen la misma edad? ",iguales
	
	mayorEdad = (edad1 >= 18) o (edad2 >= 18) o (edad3 >= 18)
	//
	escribir "Al menos uno es mayor de edad? ",mayorEdad
	
FinAlgoritmo


// Definir todos los tipos de variables y nombrarlas correctamente.
//Asignarles valor a las variables.
//Utilizar métodos de escritura para mostrar mensajes por pantalla.
//Utilizar métodos de lectura para ingresar valores por teclado y alojarlo en las variables.
//Operar con las variables.