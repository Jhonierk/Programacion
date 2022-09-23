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

    echo "Nombre ingresado: ";
  echo $_REQUEST['nombre'];
  echo "<br>";
  echo "Edad ingresada: ";
  echo $_REQUEST['edad'];
  echo "<br>";
  if ($_REQUEST['edad'] >= 18) {
    echo "Es mayor de edad";
  } else {
    echo "No es mayor de edad";
  }
  ?>
</body>
</html>