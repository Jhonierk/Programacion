//Variables
let n1, n2, cociente, residuo;

//Entrada de datos
n1 = parseInt(prompt("Ingrese numero: "));
n2 = Number(prompt("Ingrese otro numero: "));

//Proceso de datos
cociente = n1/n2;
residuo = n1 % n2;

//Salida de datos
document.write("Cociente: "+ cociente + "<br>"); 
document.write(" Residuo:" + residuo);