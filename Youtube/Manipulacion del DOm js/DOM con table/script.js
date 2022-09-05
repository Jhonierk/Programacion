const tabla = document.getElementById("tabla-producto");
const addProduct = document.querySelector("agregarNew");

function agregarFila() {
  let numFila = tabla.rows.length;
  let nombreP = prompt("Por favor digite el nombre del producto");
  let precioP = parseInt(prompt("Digite Precio"));
  if (nombreP == '' || nombreP == null  || precioP == '' || precioP == null) {
    Swal.fire({
      icon: "error",
      title: "Lo sentimos",
      text: "No has ingresado correctament, Por favor vuelva a intentar!",
    });
  } else {

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Perfecto, Se ha agregado nuevo producto',
        showConfirmButton: false,
        timer: 2500
    })

    tabla.insertRow(numFila).innerHTML =
      "<td>" +
      numFila +
      "</td>" +
      "<td>" +
      nombreP +
      "</td>" +
      "<td>" +
      precioP +
      "</td>" +
      "<td><button onclick='eliminarFila(this)'>" +
      '<i class="fa-solid fa-trash"></i>' +
      "</button></td>";
  }
}

function eliminarFila(celda) {
  
  Swal.fire({
    title: 'Esta seguro?',
    text: "Se eleiminara este producto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
        let row = celda.parentNode.parentNode;
        row.parentNode.removeChild(row);
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  
}
