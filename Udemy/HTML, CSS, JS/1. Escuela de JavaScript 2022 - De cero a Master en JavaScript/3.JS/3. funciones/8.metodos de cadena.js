//Son metodos que funcionan para alterar y modificar una cadena de caracteres de

let texto = "Hola Mundo";

console.log(texto);

//Reemplaza un caracter
console.log(texto.replace('o', 'P'));

//Convierte el texto en mayuculas
console.log(texto.toUpperCase());

//convierte todo el texto en minusculas
console.log(texto.toLowerCase());

//Convierte un texto en arreglo
console.log(texto.split());

//No solo convierte el texto en arreglo, lo separa por comillas
console.log(texto.split(''));

//Separa por palabras
console.log(texto.split(' '));

let texto2 = "Kira es una perrita negra hermosa";
let array = texto2.split(' ');
//Revierte el texto
console.log(array.reverse());

//Ahora transforma de un arreglo a un string de la siguiente manera:
console.log(array.join());

//Se organiza para que no imprima con comas y con espacio
console.log(array.join('  '));