//Conversion de datos 
/**
 * a String = Strng(), toString;
 * a Numeros = Number(), parseInt();
 * a Decimal = Number(), parseFloat();
 */

//De entero a String
let dato = 15;
console.log(typeof(dato));

//Forma 1
dato = String(dato);
//Forma 2
dato = dato.toString();
//forma 3
dato = toString(dato);

console.log(typeof(dato));



//De string a entero:

dato = '45';
console.log(typeof(dato));

//forma 1 
dato = Number(dato);
//Forma 2 
dato = parseInt(dato);

console.log(typeof(dato));



//De sting a float 
dato = "4.5";
console.log(typeof(dato));

dato = parseFloat(dato);
console.log(typeof(dato));