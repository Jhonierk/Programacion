var persona;
persona = {
    nombre : "luis",
    apellido : "torres"
}

console.log(persona.nombre);
console.log(persona.apellido);

//Tambien de esta manera:

console.log(persona['nombre']);
console.log(persona['apellido']);

//Ahora con arreglos dentro:

var persona2;
persona2 = {
    nombre : "kira",
    apellido : "otalvaro",
    telefonos : ["1234567","654321"]
}

//imprime en la primera posicion del arreglo
console.log(persona2.telefonos[0]);
//imprime la cantidad del arreglo       
console.log(persona2.telefonos.length);

//Ahora un objeto dentro de otro objeto: el objeto direccion dentro del objeto persona 3
persona3 = {
    nombre: "luis",
    apellido: "torres",
    telefonos: ["123123","321321"],
    direccion: {
        estado: "principal",
        ciudad: "dorado",
        calle: "7",
        casa: 5
    }
  }
  
  console.log(persona3.direccion.estado);
  

  //Agregar un valor ainexistente a un objeto:
  //al imprimirlo mostrara que esta indefinido
  console.log(persona3.edad);
  //Se agrega de la siguiente manera:
  persona3.edad = 20;
  console.log(persona3.edad);