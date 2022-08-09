//Normalmente es asi:
const array = [1,2,3,4,5,6,];
const otroArray =[7,8,9,10,11,12];

//El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
const nuevoArray = array.concat(otroArray);
console.log(nuevoArray); 


/*
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array4 = ['x', 'y', 'z'];
const array3 = array1.concat(array2, array4);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
*/

// Ahora se hace mas facil asi:

const nuevoArray2 = [...array, ...otroArray];
console.log(nuevoArray2);

//ahora aen objetos

const obj1 = {
    a: 'a',
    b: 'b',
    c: 'c',
}

const obj2 = {
    d: 'd',
    e: 'e',
}
// El método Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino. 
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

//Tambien de la siguiente manera:

const nuevoObjeto = {...obj1, ...obj2}
console.log(nuevoObjeto);

//Asi se usa en react

function Componente({ id, name, username, profile,}){
    return <NuevoComponente id='id'  />
}

//En ves de eso se hace el spread operator o rest operator (El resto de las propiedades)

function ComponenteA({id, ...props}){
    return <NuevoComponente id='id'  {...props}/>
}

/*
La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
*/
