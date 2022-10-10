<html>

<head>
  <title>Problema</title>
</head>

<body>
  <?php
  echo "Nombre ingresado: ";
  echo $_REQUEST['name'];
  echo '<br>';
  echo "Ingresos mensuales: ";

  if ($_REQUEST['ingresos'] == "1") {
    echo "Tienes un ingreso entre 1 a 1000";
  } elseif($_REQUEST['ingresos'] == "2"){
    echo "Tienes un ingreso entre 1001 a 3000";
  }elseif($_REQUEST['ingresos'] == "3"){
    echo "Tienes un ingreso mayor a 3000 y tienes que pagar impuestos!";
  }
  ?>
</body>

</html>