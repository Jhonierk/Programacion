//Esta es otra forma de crear objetos 

class Persona{
    nombre;
    edad;

    imprimir(){
        console.log(this.nombre, this.edad);
    }

}

const p1 = new Persona();
p1.nombre = 'alex';
p1.edad = 26;

p1.imprimir();