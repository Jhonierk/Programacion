let array = ['jhonny', 'kira', 26, 215];

//Modifica un elemento element
array[1] = "Perrita";

//Agrega un alemento de un array al final de la lista:
array.push('Kira');

//Agregar un alemento al inicio de la lista:
array.unshift("Primero");

//Pop elimina el ultimo elemento del array o lista:
array.pop();

//Quitar el primer elemento:
array.shift();

//Buscar un elemento del array:
console.log(array.indexOf('Perrita'));

//Mostran cantidad de elementos de un array:
console.log(array.length);

//Muetra los elementos de un array
console.log(array);