//Solicitar al usuario que ingrese dos n�meros enteros y determinar si ambos son pares o
//impares. Mostrar en pantalla un mensaje que indique "Ambos n�meros son pares" siempre
//y cuando cumplan con la condici�n. En caso contrario se deber� imprimir el siguiente
//mensaje "Los n�meros no son pares, o uno de ellos no es par".

Proceso ejercicio3
	
	definir num1, num2  como entero 
	
	escribir "ingresa tus 2 valores para saber son pares o impares: "
	leer num1, num2
	
	si num1 mod 2 = 0 y num2 mod 2 = 0 Entonces
		Escribir "los 2 numeros son pares"
		
	SINO
		si num1 mod 2 <> 0 y num2 mod 2 = 0 o num2 mod 2 <> 0 y num1 mod 2 = 0  Entonces
			Escribir "alguno de los n�meros es impar"
		sino
			Escribir  "los 2 son numeros impares" 
			
		finsi
		
		
	FinSi
	
FinProceso
