function saludo(nombre, apellido, genero, evento, minutosQueFaltan){
    if(minutosQueFaltan < 60*24){
        return `Bienvenido ${nombre.trim().toUpperCase()} ${apellido.trim().toUpperCase()}, Genero: ${genero}, recuerda hoy el evento: ${evento}`;
    }else if(minutosQueFaltan < 60*24*2){
        return `Bienvenido ${nombre.trim().toUpperCase()} ${apellido.trim().toUpperCase()}, Genero: ${genero}, recuerda mañana el evento: ${evento}`;
    }else{
        return `Bienvenido ${nombre.trim().toUpperCase()} ${apellido.trim().toUpperCase()}, Genero: ${genero}, recuerda pronto el evento: ${evento}`;
    }
}


let imprimir = saludo("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500);
console.log(imprimir);