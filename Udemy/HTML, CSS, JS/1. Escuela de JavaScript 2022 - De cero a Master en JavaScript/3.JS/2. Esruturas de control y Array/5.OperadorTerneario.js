let v = 'O';

//La operacion ternaria es una forma diferente de realizar una condicional similar al if & else:

/// Aqui se aplica la condicional, donde ? es como un if y : el else.
//let r = (n>0) ? 'Es positivo' : 'Es negativo';

/*
ahora anidado:
*/

let r =  (v == 'a' || v == 'A') ? `${v} es vocal`
        :(v == 'e' || v == 'E') ? `${v} es vocal`
        :(v == 'i' || v == 'I') ? `${v} es vocal`
        :(v == 'o' || v == 'O') ? `${v} es vocal`
        :(v == 'u' || v == 'U') ? `${v} es vocal`
        : `${v} No es vocal`;

console.log(r)