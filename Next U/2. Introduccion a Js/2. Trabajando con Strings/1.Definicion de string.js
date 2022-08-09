/*
¡Saludos! En esta oportunidad vamos a resumir las cadenas de caracteres o strings están conformados por texto, que pueden contener: letras, números, símbolos, signos de puntuación, entre otros.

Los valores de las variables tipo strings se expresan en sintaxis JavaScript con comillas, encerrando el valor entre comillas simples ( ' ' ) o comillas dobles ( “ ” ). Aquí te mostramos algunos ejemplos de strings:

'Esto es una cadena de texto. ';

JavaScript

"Esta es otra cadena de texto con comillas dobles.";

JavaScript

En esta lectura estudiaremos algunas de las características y funcionalidades de los strings en JavaScript.

Textos con comillas dentro de las cadenas de caracteres

Supongamos que intentamos utilizar comillas simples o dobles dentro de una cadena de texto, en este caso deberemos usar las comillas opuestas a las que están contenidas dentro del string, para delimitar el inicio y el fin de la cadena de caracteres. Eso significa que las cadenas que contienen comillas simples deben usar comillas dobles como caracteres delimitadores y las cadenas que contienen comillas dobles deben usar comillas simples como caracteres delimitadores del inicio y el fin del string, veámoslo en el siguiente ejemplo:

"Son las ‘ tres ’ en punto.";

JavaScript

'Recuerde “ saludar ” al llegar a su destino';

JavaScript

Otra opción para adicionar comillas simples o sencillas es usando los caracteres de escape; con esta opción podemos incluir tanto comillas simples como comillas dobles en nuestro string. Si queremos utilizar una comilla simple anteponemos la barra invertida ( \ ) antes de la comilla simple ( ' ), para avisarle al interpretador de JavaScript que queremos escapar el valor por defecto que tiene el carácter ' dentro de la sintaxis y como consecuencia el interpretador sabe que queremos utilizar el caracter comilla simple, en vez del símbolo que delimita el inicio o fin de una cadena de caracteres.

A continuación podemos ver unos ejemplos de cómo utilizar los caracteres de escape para definir strings o cadenas de caracteres.

'Son las \' tres \' en punto.';

JavaScript

"Recuerde \" saludar \" al llegar a su destino";

JavaScript

Propiedades y métodos

En JavaScript, las cadenas de caracteres tienen sus propios atributos y métodos integrados, a continuación estudiamos los más comunes.

Longitud (length)

Length es una propiedad de todos los objetos de tipo String, que nos retorna un valor numérico del tamaño de la cadena de caracteres que estamos almacenando en la variable de tipo string. Como es una propiedad no se requiere accederla finalizando con paréntesis; para acceder a esta propiedad ponemos el nombre de la variable o el valor del string y finalizamos con un punto y a continuación sin ningún espacio extra la palabra length.

"Primer nombre".length;

JavaScript

var nombre = "Primer nombre";

JavaScript

nombre.length;

JavaScript

Resultado= 13

JavaScript

Minusculas (toLowerCase)

El método toLowerCase de los objetos tipo string, nos permite obtener la cadena de caracteres convertida a caracteres en minúscula; los números, símbolos y otros caracteres no se ven afectados. Recordemos que la manera de llamar un método o una función es el nombre de la función finalizado con los parámetros que recibe el método, separados por comas y encerrados entre paréntesis.
Para nuestro caso, ponemos el valor del string, continuamos con un punto, seguido de apertura y cierre de los paréntesis (esta función no recibe ningún parámetro, con lo cual dejamos este espacio vacío) y terminamos con un punto y coma. A continuación puedes ver un ejemplo:

"CURSO DE JAVASCRIPT" .toLowerCase ();

JavaScript

Resultado= "curso de javascript"

JavaScript

Mayúsculas (toUpperCase)

Así como tenemos un método para obtener una cadena de caracteres en minúsculas, el método toUpperCase nos devuelve el contenido del string en mayúsculas. En este caso los números, símbolos y otros caracteres tampoco se ven afectados.

"estoy aprendiendo javascript". ToUpperCase ();

JavaScript

Resultado= "ESTOY APRENDIENDO JAVASCRIPT"

JavaScript

Recortar (trim)

El método trim de una cadena de caracteres devuelve el valor del string, eliminando los caracteres en blanco que estén al inicio y al final de la cadena, sin importar la cantidad de caracteres en blanco que contenga. Por ejemplo:

"     eliminando espacios en blanco        " .trim ();

JavaScript

Resultado= "eliminando espacios en blanco"

JavaScript

Este es un inicio al gran mundo de los strings. Sigue avanzando que tienes muchomuchos nuevos conceptos por descubrir.
*/