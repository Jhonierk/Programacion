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
  $diaSemana[] = "Lunes";
  $diaSemana[] = "Martes";
  $diaSemana[] = "Miércoles";
  $diaSemana[] = "Jueves";
  $diaSemana[] = "Viernes";
  $diaSemana[] = "Sábado";
  $diaSemana[] = "Domingo";
  echo "Primer elemento:" . $diaSemana[0];
  echo "<br>";
  echo "Ultimo elemento:" . $diaSemana[6];
  echo "<br>";
  echo "Todos los elementos: ";
  echo "<br>";
  for($x = 0; $x < count($diaSemana); $x++){
        echo $diaSemana[$x];
        echo "<br>";
  }
  ?>
</body>
</html>