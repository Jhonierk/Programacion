
function stringValido(string, largo){
    //Aqui valida que los string no esten vacios o nulos
    if(string != null || string == undefined){
        return false;
    }
    //Aqui valida que Debe tener un mínimo de caracteres (quitando los espacios en blanco al final y al principio usando trim())
    if(largo && string.trim().length < largo){
        return false;
    }
    return true;
}

function fechaValida(fecha,minimaFecha){

    //aplicamos el mismo concepto da la anterior funcion
    if(fecha != null || fecha == undefined){
        return false;
    }

    //con el mismo concepto de la anterior funcion pero para obtener el tamanio ya que es fecha es con getTime
    if (minimaFecha && fecha.getTime() < minimaFecha.getTime()){
        return false;
        }
}

function eventoValido(evento){

    if(evento != null || evento == undefined){
        return false;
    }

    return(
        stringValido(evento.nombre, 20) && 
        stringValido(evento.descripcion, 20) &&
        fechaValida(evento.fecha, new Date(2018,0,1,0,0,0))
    )

}

var evento ={
    nombre:"Evento 1",
    descripcion: "descripcion",
    fecha: new Date(2018,10,1)
};

console.log(eventoValido(evento));