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
    /*Problema propuesto. Mostrar la tabla de multiplicar del 2. Emplear el for, luego el while y por último el do/while.
La estructura for permite incrementar una variable de 2 en 2:
for ($f = 2; $f <= 20; $f = $f + 2) 
*/
echo "Tabla del 2 con el for";
echo "<br>";
echo "<br>";
for ($f = 2; $f <= 20; $f = $f + 2) {
  echo $f;
  echo "-";
}
echo "<br>";
echo "<br>";
echo "Tabla del 2 con el while";
echo "<br>";
echo "<br>";
$f = 2;
while ($f <= 20) {
  echo $f;
  echo "-";
  $f = $f + 2;
}
echo "<br>";
echo "<br>";
echo "Tabla del 2 con el do/while";
echo "<br>";
echo "<br>";
$f = 2;
do {
  echo $f;
  echo "-";
  $f = $f + 2;
} while ($f <= 20);

    ?>
</body>
</html>