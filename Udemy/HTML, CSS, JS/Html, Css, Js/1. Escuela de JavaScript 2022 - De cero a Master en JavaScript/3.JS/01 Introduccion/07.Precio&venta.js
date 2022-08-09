//variables
let vv = 0, igv = 0, pv = 0;

//Entrada de datos
vv = parseFloat(prompt("Ingrese valor de venta: "));

//Proceso de datos
igv = vv * 0.19;
pv = vv + igv;

//Salida de datos
/** 
document.write("Valor de venta: ", vv, "<br>");
document.write("IGV: ", igv, "<br>");
document.write("PV: ", pv, "<br>");
*/

//Otra formad de mostrar la salida de datos

document.write(`<pre> 
                Valor de venta : ${vv}
                IGV:           : ${igv}
                Precio de venta: ${pv}
                </pre>`);

//ara que muestre en la consola del navegador:
console.log(`Valor de venta \t: ${vv} \n IGV: \t\t\t: ${igv} \n Precio de venta: \t: ${pv}`)


