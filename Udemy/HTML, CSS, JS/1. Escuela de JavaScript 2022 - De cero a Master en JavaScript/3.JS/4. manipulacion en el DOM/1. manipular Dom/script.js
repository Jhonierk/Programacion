//Cambiar el idioma de ingles a espaniol

document.querySelector('html').lang = 'es';

//Cambiar el titulo del documento html
document.querySelector('title').innerText ="Aprendiendo DOM";

//innerText solo escribe texto en cambio innerHtml Si lee las etiquetas Html:
//innerText no leera la etiqueta html
//document.querySelector('body').innerText = '<h1>Hola mundo</h1>';
//innertHtml si lee las etiquetas
//document.querySelector('body').innerHTML = '<h1>Hola mundo </h1>';


/*
//Asi se selecciona una clase y un id en queryselector:

//Por clase
document.querySelector('.caja')

//Asi se seleccionan todos los elementos div que contengan la clase caja:
document.querySelectorAll('.caja')

//Esta es otra forma de seleccionar una clase:
//sin necesidad de agregar el punto
document.getElementsByClassName('caja')

//ahora con los id:
document.querySelector('#caja1')
document.querySelectorAll('#caja1')
document.getElementById('caja1')
*/

//ahora guardemos el selector dentro de una variable
let caja1 = document.getElementById('caja1');

//Vamos a crear un elemento con create
//creamos un boton
let btn = document.createElement('button');

//agregamos el boton dentro de la variable caja 1
caja1.append(btn);
//y le agregamos nombre al boton
btn.innerText = "Boton 01";

//Asi le agregamos clase al boton
btn.classList.add('btn');
