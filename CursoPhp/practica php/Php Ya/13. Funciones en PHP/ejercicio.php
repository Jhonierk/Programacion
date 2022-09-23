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
    /*Problema propuesto.
    Confeccionar un formulario que solicite la carga del nombre de usuario y su clave en dos oportunidades. 
    En la página que se procesan los datos del formulario implementar una función que imprima un mensaje si las dos claves ingresadas son distintas.*/

    function verificarClaves($cla1, $cla2)
  {
    if ($cla1 != $cla2)
      echo "Las claves ingresadas son distintas";
  }

  verificarClaves($_REQUEST['clave1'], $_REQUEST['clave2']);
    ?>
    <h2>Se verificaron las claves ingresadas.</h2>
</body>
</html>