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
       echo $_REQUEST['name'];
       echo '<br>';
       echo "Deportes favoritos: ";
       echo '<br>';
       if (isset($_REQUEST['check0'])) {
         
         echo "futbol <br>" ;
       }
       if (isset($_REQUEST['check1'])) {
         echo "basket <br>";
       } 
       if (isset($_REQUEST['check2'])) {
        echo "tennis <br>";
      } 
      if (isset($_REQUEST['check3'])) {
        echo "voley <br>";
      } 
    ?>
</body>
</html>