//EJERCICIO ZOOM
//Realizar un programa que pida al usuario el horario en el que se conect� al zoom. Si ese horario
//est� entre la hora de ingreso y la hora de ingreso + los 15? de tardanza, mostrar� un mensaje por//
//pantalla que diga "Llegaste a tiempo, tienes presente". Si el horario de ingreso supera ese l�mite,
//se mostrar� un mensaje por pantalla que diga "Hoy tendr�s tardanza. Recuerda avisarle a tus
//coaches cuando llegar�s tarde. Ma�ana te esperamos a tiempo, tu participaci�n en el equipo es VITAL"

Algoritmo ejercicioZoom
	
	definir horaIngreso, minutoI, horaPuntual, minutoP Como real
	
	Escribir "Por favor digite su hora y minuto de ingreso de ingreso: "
	escribir" Digite hora: "
	leer horaIngreso
	escribir"Digite minuto: "
	leer minutoI
	
	horaPuntual = 4
	minutoP = 14
	
	
	si horaIngreso > horaPuntual O minutoI > minutoP Entonces
		escribir"Llegaste tarde tienes una falta"
	SiNo
		escribir"llegaste puntual"
	FinSi
	
FinAlgoritmo
