/*
Practica 02: Descuentos de un restaurante Parte 02

Enunciado: debido a los excelentes resultados, el restaurante decide ampliar sus ofertas 
de acuerdo a la siguiente escala de consumo, ver la tabla. Determinar el monto del descuento, 
el importe del impuesto y el importe a pagar.

    Consumo (S/.)       Descuento (%)

        Hasta 100                 10

        Mayor a 100             20

        Mayor a 200             30


Análisis: para la solución de este problema, se requiere que el usuario ingrese el consumo y 
el sistema verifica y calcula el monto del descuento, el impuesto y el importe a pagar.
*/

let consumo = Number(prompt('Ingrese el consumo:'));

let descuento, datoDescuento;

//Proceso de datos
if (consumo <=  100){
    //DEscuento 10%
    datoDescuento = '10%';
    descuento = consumo * 0.10;
}else if( consumo > 100 && consumo <= 200){
    //DEscuento 20%
    datoDescuento = '20%';
    descuento = consumo * 0.20;
}else if(consumo > 200){

    datoDescuento = '30%';
    descuento = consumo * 0.30;
}

let montoDescuento = consumo - descuento;
let igv = montoDescuento * 0.19;
let totalPagar = montoDescuento + igv;

//Salidda de datos
document.write(`<pre>
                Consumo:                ${consumo}
                Descuento:              ${descuento} | ${datoDescuento} 
                Monto con descuento:    ${montoDescuento}
                IGB:                    ${igv}       | 19%   
                Total a pagar:          ${totalPagar}
                </pre>
`)