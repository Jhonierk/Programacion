//encabezadoEvento("Intercambio de Libros", "Biblioteca") //Devuelve --> Evento: Intercambio de Libros. Lugar: Biblioteca
//encabezadoEvento("Intercambio de Libros", "Biblioteca") //Devuelve --> Evento: Intercambio de Libros. Lugar: Biblioteca
function encabezadoEvento(event, lugar){
    let oracion = `Evento: ${event}, Lugar: ${lugar}`;
    return oracion;
}

console.log(encabezadoEvento("Intercambio de Libros", "Biblioteca"));
console.log(encabezadoEvento("Lectura de Poemas", "Sala A"));

/*
Ejemplo de:
function saludar(nombre, apellido, curso){
    let resultado = `Hola ${nombre} ${apellido}, bienvenido al curso ${curso}`;
    return resultado;
}

console.log(saludar("Kira", "Negra", "C++"));
----------------------------------------------------------------
*/

/*
limpiarNombreParticipante("    Luis", "Castro   ") // Devuelve --> CASTRO, luis

limpiarNombreParticipante(" ANA", "MENDEZ   ") // Devuelve -->  MENDEZ, ana
*/

function limpiarNombreParticipante(nombre, apellido){
    return `${apellido.trim().toUpperCase()}, ${nombre.trim().toLowerCase()}`;
}

console.log(limpiarNombreParticipante("    Luis", "Castro   "));
console.log(limpiarNombreParticipante(" ANA", "MENDEZ   "));
/*
Ejemplo de: 
function capitalize(x){
    //Que desde la primera posicion se convierte en mayustula + desde la segunda posicion todo en minuscula de cada palabra
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}

function procesarFila(fila){
    //Se crea un arreglo y se almacena una posicion despues de cada coma
    let arreglo = fila.split(',');
    //Se almacena la varible nombre en primera posicion y Trim elimina los espacios inecesarios
    let nombre = arreglo[0].trim();
    //Se almacena la varible nombre en segunda posicion y Trim elimina los espacios inecesarios
    let apellido = arreglo[1].trim();
    //se retorna el valor de la posicion
    return capitalize(nombre) + " " + capitalize(apellido);
}

let fila = " kirA   ,  MAriA         "

console.log(procesarFila(fila));
*/