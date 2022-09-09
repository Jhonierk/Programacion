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
    $ar = fopen("pedidos.txt", "a") or die("Problemas en la creacion");
    fputs($ar, $_REQUEST['nombre']);
    fputs($ar, "\n");
    fputs($ar, $_REQUEST['direccion']);
    fputs($ar, "\n");

    if (isset($_REQUEST['jamonqueso'])) {
    fputs($ar, "Cantidad de Jamón y Queso:");
    fputs($ar, $_REQUEST['cantjamonqueso']);
    fputs($ar, "\n");
  }
  if (isset($_REQUEST['napolitana'])) {
    fputs($ar, "Cantidad de Napolitana:");
    fputs($ar, $_REQUEST['cantnapolitana']);
    fputs($ar, "\n");
  }
  if (isset($_REQUEST['muzzarella'])) {
    fputs($ar, "Cantidad de Muzzarella:");
    fputs($ar, $_REQUEST['cantmuzzarella']);
    fputs($ar, "\n");
  }

  fputs($ar, "--------------------------------------------------------");
  fputs($ar, "\n");
  fclose($ar);
  echo "El pedido se cargó correctamente.";
    ?>
</body>
</html>