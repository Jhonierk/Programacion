const palindromo = (palabra) => {
    
    //Aqui se borran los espacion en blanco(se reemplazan)
    palabra = palabra.replace(' ','');
    //Convertimos toda la palabra en minusculas
    palabra = palabra.toLowerCase(); 

    //Generar palabra invertida si son iguales o no:
    //Para invertirlo hay que convertirlo en lista (No se puede invertir una cadena de caracteres)
    //se convierte en una lista con split, para revertirlo y volverlo a transformar en una cadena de caracter con join
    let invertido = palabra.split('').reverse().join('');
    
    (palabra == invertido) ? console.log('Es palindromo'): console.log('No es palindromo');

}

palindromo('luz azul');