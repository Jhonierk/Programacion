
//Clase
class Persona{

    //constructor
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    //metodo
    
    imprimir(){
        console.log(`Nombre: ${this.nombre} \nEdad: ${this.edad}`);
    }
}

//Clase que heredadra a la clase persona:
class Empleado extends Persona{
   
    constructor(nombre,edad , sueldo){
        super(nombre,edad);
        this.sueldo = sueldo;
    }
    
    //heredar de imprimir: 
    imprimir(){
        super.imprimir();
        console.log('Sueldo: ' + this.sueldo);
    }

}

const empleado1 = new Empleado('alex', 23, 2000);
empleado1.imprimir();
console.log(empleado1);