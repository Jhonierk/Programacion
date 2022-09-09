<html>

<head>
  <title>Problema</title>
</head>

<body>
  <?php
  
    /*Confeccionar un programa que permita ingresar el código 
    de un alumno y nos muestre su nombre, mail y nombre del curso en el 
    cual está inscripto. Hacer un formulario donde se ingrese el código de alumno y otra 
    página donde se muestren los datos respectivos. Mostrar un mensaje si no existe el 
    código de alumno ingresado.*/

    $conexion = mysqli_connect("localhost", "root", "", "base1") or
    die("Problemas con la conexión");

  $registros = mysqli_query($conexion, "select nombre,
                                               mail,
                                               nombrecurso
                                               from alumnos as alu
                                          inner join cursos as cur on cur.codigo=alu.codigocurso
                                          where alu.codigo=$_REQUEST[codigo]") or
    die("Problemas en el select:" . mysqli_error($conexion));

  if ($reg = mysqli_fetch_array($registros)) {
    echo "Nombre:" . $reg['nombre'] . "<br>";
    echo "Mail:" . $reg['mail'] . "<br>";
    echo "Curso:" . $reg['nombrecurso'] . "<br>";
  } else {
    echo "No existe un alumno con ese código.";
  }
  mysqli_close($conexion);


  ?>
</body>

</html>