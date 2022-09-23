<?php

$host="localhost";
$bd="prueba";
$usuario="root";
$contra="";

try {
    //coneccion a la base de datos
    $conexion=new PDO("mysql:host=$host;dbname=$bd",$usuario,$contra);

    //Preguntar si se realizo la conexion?:
    /*
    if($conexion){
        echo "Conectado..... al sistema";
    }*/
    
    //otra forma de conectarse a la base de datos:
    // $conexion = mysqli_connect("localhost", "root", "", "base1") or die("Problemas con la conexión");

} catch (Exception $e){
    echo $e -> getMessage();
}

?>