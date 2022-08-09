var estaActivo = false;
var condicionSalud = true;
var sobrePeso = false;

if (estaActivo) {
    if (condicionSalud || sobrePeso) {console.log("Remitir al doctor")}
    else {console.log ("Felicitaciones, estas en buenas condiciones")}}
else {
    if (condicionSalud || sobrePeso) {console.log("Remitir al especialista")}
    else {console.log ("Remitir a gimnasio")}}