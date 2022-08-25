//Realizar un programa que pida tres notas y determine si un alumno aprueba o reprueba un
//curso, sabiendo que aprobará el curso si su promedio de tres calificaciones es mayor o
//igual a 70; y reprueba en caso contrario.

Proceso act_extra_1 
	
	definir nota1, nota2, nota3, promedio como reales
	
	escribir "defina su 1er nota: "
	leer nota1
	escribir "defina su 2do nota: "
	leer nota2
	escribir "defina su 3er nota: "
	leer nota3
	
	promedio = (nota1 + nota2 + nota3) / 3
	
	si promedio >= 70 Entonces
		Escribir  "FELICIDADES! aprobaste con: ", promedio
		
	sino 
		Escribir  "HO! desaprobaste con: ", promedio
	FinSi
	
	
FinProceso
