<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $conexion = mysqli_connect("localhost", "root", "", "base1") or 
        die("Problemas de conexion");

        $registros = mysqli_query($conexion, "select nombreCurso from crusos") or 
        die("Problemas con select: " . mysqli_error($conexion));

        while($reg = mysqli_fetch_array($registros)){
            echo "Nombre del curso: " . $reg['nombreCurso'];
        }
    ?>
</body>
</html>