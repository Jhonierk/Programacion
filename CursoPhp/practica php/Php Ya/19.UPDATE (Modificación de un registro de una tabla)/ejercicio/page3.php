<html>

<head>
    <title>Problema</title>
</head>

<body>
    <?php
    $conexion = mysqli_connect("localhost", "root", "", "base1") or
        die("Problemas con la conexión");

    mysqli_query($conexion, "update crusos
                          set nombreCurso='$_REQUEST[nombrec]' 
                        where codigo=$_REQUEST[codigo]") or
        die("Problemas en el select:" . mysqli_error($conexion));
    echo "Se modificó el nombre del curso";
    ?>
</body>

</html>