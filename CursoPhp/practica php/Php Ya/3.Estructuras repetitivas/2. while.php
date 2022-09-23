<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    $dia = date("d");
    $inicio = 1;
    $fecha = date("y-m-d ");
    $hora = date("H:i:s");

    while ($inicio <= $dia){
        echo $inicio. "<br>";
        $inicio ++;
    }
    echo $fecha. "<br>";
    echo $hora. "<br>";
    ?>
</body>
</html>