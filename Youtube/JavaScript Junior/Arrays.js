let pc = {
    nombre: "JhonnyPc",
    procesador: "Intel core 5",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `el nombre de mi Pc es: <b>${nombre}</b> <br>
        el procesador es: <b>${procesador}</b> <br>
        la ram es de: <b>${ram}</b> <br>
        el espacio de mi pc es de: <b>${espacio}</b>`;
document.write(frase);