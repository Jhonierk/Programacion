
//Clase
class Persona{
   
    //constructor
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    //metodo
    imprimir(){
        console.log(this.nombre, this.edad);
    }

}

const p1 = new Persona('alex', 23);


p1.imprimir();