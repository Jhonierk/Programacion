//un número de tres cifras y muestre la , decena y la .
//Por , si el número ingresado por pantalla es 123 el programa debe :
	

Algoritmo sin_titulo
	
	definir unidad, num , decena, centena como entero
	
	escribir " Por favor digite el numero: "
	leer num
	
	unidad = num mod 10
	num = trunc(num/10)
	decena = num mod 10
	num = trunc(num/10)
	centena = num mod 10
	num = trunc(num/10)
	
	escribir "La centena es: ",centena
	escribir "La decena es: ",decena
	escribir "La unidad es: ",unidad	
	
FinAlgoritmo
