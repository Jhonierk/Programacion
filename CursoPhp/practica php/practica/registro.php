<?php
include("bd.php");

//si se da enviar haga...
if(isset($_POST['enviar'])){

    //comprobar que no esten vacios
    if (strlen($_POST['nombre']) >= 1 && strlen($_POST['apellido']) >= 1 && strlen($_POST['apellido']) >= 1 && strlen($_POST['correo']) >= 1 && strlen($_POST['sexo']) >= 1 && strlen($_POST['mensaje']) >= 1){


        //creando variables:
        //con trim remueve el espacio de inicio y final
        $nombre = trim($_POST['nombre']);
        $apellido = trim($_POST['apellido']);
        $correo = trim($_POST['correo']);
        $sexo = trim($_POST['sexo']);
        $mensaje = trim($_POST['mensaje']);
        $fechateg= date("d/m/y");

        //cracion de consulta guardada en una variable:
        //guarda en la base de datos
        $guardar = "INSERT INTO registro(nombre, apellido, sexo, correo, mensaje, fecha_reg) VALUES ('$nombre','$apellido','$correo','$sexo','$mensaje','$fechateg')";

        $comprobar = ($conexion, $guardar);

        if($comprobar){
            ?> 
	    	<h3 class="ok">¡Te has inscripto correctamente!</h3>
           <?php
        } else {
	    	?> 
	    	<h3 class="bad">¡Ups ha ocurrido un error!</h3>
           <?php
	    }

    } else {
        ?> 
        <h3 class="bad">¡Por favor complete los campos!</h3>
       <?php
       }


}


















?>