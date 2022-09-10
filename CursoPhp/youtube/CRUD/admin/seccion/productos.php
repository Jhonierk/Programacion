<?php include('../template/cabecera.php') ?>

<?php 
//maneras para obtener los datos atraves de los inputs del formulario
$txtID=(isset($_POST['txtID'])) ? $_POST['txtID']:"";
$txtNombre=(isset($_POST['txtNombre'])) ? $_POST['txtNombre']:"";

$txtImagen=(isset($_FILES['txtImagen']['name'])) ? $_FILES['txtImagen']['name']:'';
$accion=(isset($_POST['accion'])) ? $_POST['accion']:"";

echo $txtID."<br>";
echo $txtNombre."<br>";
echo $txtImagen."<br>";
echo $accion."<br>";

$host="localhost";
$bd="sitio";
$usuario="root";
$contra="";

try {
    //coneccion a la base de datos
    $conexion=new PDO("mysql:host=$host;dbname=$bd",$usuario,$contra);

    //Preguntar si se realizo la conexion?:
    if($conexion){
        echo "Conectado..... al sistema";
    }
    //otra forma de conectarse a la base de datos:
    // $conexion = mysqli_connect("localhost", "root", "", "base1") or die("Problemas con la conexión");

} catch (Exception $e){
    echo $e -> getMessage();
}

switch ($accion){

    case "Agregar":
        echo "Presionaste boton Agregar";
        //INSERT INTO `libros` (`id`, `nombre`, `imagen`) VALUES (NULL, 'libro de php', 'imagen.jpg'); 
        try {
        $sentenciaSQL = $conexion->prepare("INSERT INTO `libros` (`id`, `nombre`, `imagen`) VALUES (NULL, 'Libro php', 'imagen.jpg')");
        $sentenciaSQL-> execute();
        if($sentenciaSQL){
            echo "Se realizo el cambio";
        }else{
             echo "Algo salio mal";
        }
        break;
    }catch (Exception $e){
        echo $e -> getMessage();
    }

    case "Modificar":
        echo "Presionaste boton Modificar";
        break;
         
    case "Cancelar":
        echo "Presionaste boton Cancelar";
        break;

}


?>

<div class="col-md-5">

    <div class="card">
        <div class="card-header">
            Datos Libros
        </div>
        <div class="card-body">

            <form method="POST" enctype="multipart/form-data"> 
                
            <div class = "form-group">
            <label for="txtID">ID: </label>
            <input type="text" class="form-control" name="txtID" id="textID"  placeholder="ID">
            </div>

            <div class = "form-group">
            <label for="txtNombre">Nombre: </label>
            <input type="text" class="form-control" name="txtNombre" id="textID"  placeholder="Nombre del libro">
            </div> 

            <div class = "form-group">
            <label for="txtImagen">Imagen: </label>
            <input type="file" class="form-control" name="txtImagen" id="txtImagen"  placeholder="Nombre del libro">
            </div> 


            <div class="btn-group" role="group" aria-label="">
                <button type="submit" name="accion" value="Agregar" class="btn btn-success">Agregar</button>
                <button type="submit" name="accion" value="Modificar" class="btn btn-warning">Modificar</button>
                <button type="submit" name="accion" value="Cancelar" class="btn btn-info">Cancelar</button>
            </div>

            </form>


        </div>
        
    </div> 

</div>




<div class="col-md-7">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Libro</th>
                <th>Imagen</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2</td>
                <td>Aprende php</td>
                <td>imagen.jpg </td>
                <td>seleccionar | Borrar</td>
            </tr>
            
        </tbody>
    </table>
</div>

<?php include('../template/pie.php') ?>