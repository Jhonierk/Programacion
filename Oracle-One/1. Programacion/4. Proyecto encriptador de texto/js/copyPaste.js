//funcion para copiar el texto
 //funcion para copiar el texto ingresados
 function copiarTexto() {
    let texto = document.getElementById('msg');
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
}