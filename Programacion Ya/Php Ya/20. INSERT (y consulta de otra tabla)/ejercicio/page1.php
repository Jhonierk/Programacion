<html>

<head>
  <title>Problema</title>
</head>

<body>
  <form action="page2.php" method="post">
    Ingrese nombre:
    <input type="text" name="nombre"><br>
    Ingrese mail:
    <input type="text" name="mail"><br>
    Seleccione el curso:<br>
  
      <?php
      $conexion = mysqli_connect("localhost", "root", "", "base1") or
        die("Problemas con la conexión");

      $registros = mysqli_query($conexion, "select codigo,nombrecurso from cursos") or
        die("Problemas en el select:" . mysqli_error($conexion));
      while ($reg = mysqli_fetch_array($registros)) {
        
        echo "<input type='radio' name='valor' value=\"$reg[codigo]\">$reg[nombrecurso]</option>";
        

      }
      ?>
   
    <br>
    <input type="submit" value="Registrar">
  </form>
</body>

</html>