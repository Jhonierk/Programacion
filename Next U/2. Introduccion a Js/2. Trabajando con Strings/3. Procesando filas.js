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