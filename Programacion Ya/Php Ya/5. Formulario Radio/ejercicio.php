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
        /*Solicitar que se ingrese por teclado el nombre de una persona y disponer tres controles de tipo radio que nos permitan seleccionar si la persona: 1-no tiene estudios, 2-estudios primarios y 3-estudios secundarios.
        En la página que procesa el formulario mostrar el nombre de la persona y un mensaje indicando el tipo de estudios que posee.*/

        echo "Nommbre ingresado: ";
        echo $_REQUEST['nombre'];
        echo '<br>';
        echo "Nivel de estudios: ";
        if ($_REQUEST['radio'] == "0"){
            echo "Sin estudios";
        }elseif($_REQUEST['radio'] == "1"){
            echo "Estudio primario";
        }elseif($_REQUEST['radio'] == "2"){
            echo "Estudio Secundario";
        }elseif($_REQUEST['radio'] == "3"){
            echo "Estudio Educacion Superior";
        }

    ?>
</body>
</html>