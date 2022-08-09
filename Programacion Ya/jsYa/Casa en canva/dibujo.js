//Guarda el elemento por el id y el contexto
const cajota =  document.getElementById("cajita");
const lienzo = cajota.getContext("2d");
//console.log(lienzo);

//Techo:
// Linea 1
lienzo.beginPath();
lienzo.strokeStyle = 'black';
lienzo.moveTo(100,100);
lienzo.lineTo(200,20);
lienzo.stroke();

// Linea 2
lienzo.beginPath();
lienzo.strokeStyle = 'green';
lienzo.moveTo(300,100);
lienzo.lineTo(100,100);
lienzo.stroke();

// Linea 3
lienzo.beginPath();
lienzo.strokeStyle = 'red';
lienzo.moveTo(200,20);
lienzo.lineTo(300, 100);
lienzo.stroke();

// Linea 4
lienzo.beginPath();
lienzo.strokeStyle = 'pink';
lienzo.moveTo(100,230);
lienzo.lineTo(100, 100);
lienzo.stroke();

// linea 5
lienzo.beginPath();
lienzo.strokeStyle = 'yellow';
lienzo.moveTo(300,230);
lienzo.lineTo(100,230);
lienzo.stroke();

//Linea 6
lienzo.beginPath();
lienzo.strokeStyle = 'blue';
lienzo.moveTo(180,230);
lienzo.lineTo(180,190);
lienzo.stroke();


//Linea 7
lienzo.beginPath();
lienzo.strokeStyle = 'pink';
lienzo.moveTo(220,190);
lienzo.lineTo(180,190);
lienzo.stroke();

// Linea 8
lienzo.beginPath();
lienzo.strokeStyle = 'orange';
lienzo.moveTo(220,230);
lienzo.lineTo(220,190);
lienzo.stroke();

//Linea 9
lienzo.beginPath();
lienzo.strokeStyle = 'black';
lienzo.moveTo(300,230);
lienzo.lineTo(300,100);
lienzo.stroke();