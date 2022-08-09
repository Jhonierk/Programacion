function saludar(nombre){
    //console.log(`Hola, ${nombre} desde una funcion`);
    //return devuelve un valor
    //Con return devuelve un valor mas no lo muestra
    return `Hola, ${nombre} desde una funcion`
}

//Para mostrar el valor de un return se usa las variables

const a = saludar('Kira');
const b = saludar('jhonny');

console.log(a,b);