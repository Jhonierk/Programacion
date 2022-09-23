<html>

<head>
  <title>Problema</title>
</head>

<body>
  <?php
  $suma = 0;
  foreach ($_REQUEST as $clave => $valor) {
    echo "Valor: " . $valor;
    echo "<br>";
    echo "Clave: " . $clave;
    echo "<br>";
    $suma = $suma + $valor;
  }
  echo "La suma es: " . $suma;
  ?>
</body>

</html>