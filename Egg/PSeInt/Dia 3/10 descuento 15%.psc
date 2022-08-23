//Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea
//saber cuánto deberá pagar finalmente por su compra.

Algoritmo ejercicio10
	
	definir pagar, descu, pagoFinal Como Real
	
	escribir "Por favor digitar cantidad a pagar: "
	leer pagar
	
	
	descu = pagar * 0.15 
	pagoFinal = pagar - descu
	escribir "El descuento del 15%: ",descu
	escribir "El total a pagar es: ",pagoFinal
	
FinAlgoritmo
