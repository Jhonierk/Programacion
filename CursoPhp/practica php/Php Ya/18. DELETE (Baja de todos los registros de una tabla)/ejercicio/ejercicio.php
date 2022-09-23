<html>

<head>
  <title>Problema</title>
</head>

<body>
    <?php

    $conexion = mysqli_connect("localhost", "root", "", "base1") or die("Problemas de conexion");

    $eliminar = mysqli_query($conexion, "delete from crusos") or die("problemas en el borrado: " .mysqli_error($conexion));

    echo "Se efectuo el borrado de los cursos";

    mysqli_close($conexion);
 
?>
</body>

</html>
