Algoritmo sin_titulo
	
	Definir tornillosMalos , tornillosCorrectos Como Entero
	
	Escribir "Cuantos tornillos defectuosos hizo? "
	leer tornillosMalos
	
	Escribir "Cuantos tornillos buenos hizo? "
	leer tornillosCorrectos
	
	Si tornillosMalos > 200 y tornillosCorrectos < 10000 Entonces
		Escribir "Su grado de eficiencia es: 5"
	SiNo
		Si tornillosMalos < 200 y tornillosCorrectos < 10000 Entonces
			Escribir "Su grado de eficiencia es: 6"
		SiNo
			Si tornillosMalos > 200 y tornillosCorrectos > 10000
				Escribir "Su grado de eficiencia es: 7"
			SiNo
				Si tornillosMalos < 200 y tornillosCorrectos > 10000
					Escribir "Su grado de eficiencia es: 8"
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
