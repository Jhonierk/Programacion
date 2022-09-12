<?php include('../template/cabecera.php') ?>

<?php 
//maneras para obtener los datos atraves de los inputs del formulario
$txtID=(isset($_POST['txtID'])) ? $_POST['txtID']:"";
$txtNombre=(isset($_POST['txtNombre'])) ? $_POST['txtNombre']:"";

$txtImagen=(isset($_FILES['txtImagen']['name'])) ? $_FILES['txtImagen']['name']:'';
$accion=(isset($_POST['accion'])) ? $_POST['accion']:"";

//conexion a la base de datos desde el archivo bd.php
include('../config/bd.php');

switch ($accion){

    case "Agregar":
        //INSERT INTO `libros` (`id`, `nombre`, `imagen`) VALUES (NULL, 'libro de php', 'imagen.jpg'); 
        $sentenciaSQL = $conexion->prepare("INSERT INTO libros (nombre,imagen) VALUES (:nombre,:imagen);");
        //insertar los datos desde el formulario (que el usuario digite)
        $sentenciaSQL -> bindParam(':nombre',$txtNombre);

        //Para evitar que se sobre escriba una imagen con mismo nombre:
        $fecha = new DateTime();
        //variable que que comprueba si la imagen esta vacia, en caso contrario guarda la imagen agregandole la fecha
        $nombreArchivo=($txtImagen!="")?$fecha->getTimestamp()."_".$_FILES["txtImagen"]["name"]:"imagen.jpg";

        //Aqui se almacena la informacion completa de la imagen
        $tmpImagen=$_FILES["txtImagen"]["tmp_name"];

        //vuelve a comprobar que no este vacia y la guarda en la siguiente ubicacion
        if($tmpImagen!=""){
            move_uploaded_file($tmpImagen,"../../img/".$nombreArchivo);
        }


        $sentenciaSQL -> bindParam(':imagen',$nombreArchivo);
        $sentenciaSQL-> execute(); 
        break;

    case "Modificar":

        //Para que modifique el nombre con su respectivo id
        $sentenciaSQL = $conexion->prepare("UPDATE libros SET nombre=:nombre WHERE id=:id");
        $sentenciaSQL -> bindParam(':nombre',$txtNombre);
        $sentenciaSQL -> bindParam(':id',$txtID);
        $sentenciaSQL -> execute();
        

        //Comprobando si la casilla imagen esta vacia
        if($txtImagen!="" or $txtNombre!=NULL){
            //Modificar la imagen con el respectivo id
            $sentenciaSQL = $conexion->prepare("UPDATE libros SET imagen=:imagen WHERE id=:id");
            $sentenciaSQL -> bindParam(':imagen',$txtImagen);
            $sentenciaSQL -> bindParam(':id',$txtID);
            $sentenciaSQL -> execute();
        }

        break;
         
    case "Cancelar":
        echo "Presionaste boton Cancelar";
        break;

    case "Seleccionar":
        
        $sentenciaSQL = $conexion->prepare("SELECT * FROM libros WHERE id=:id");
        $sentenciaSQL -> bindParam(':id',$txtID);
        $sentenciaSQL -> execute();
        $libro=$sentenciaSQL->fetch(PDO::FETCH_LAZY);

        $txtNombre=$libro['nombre'];
        $txtImagen=$libro['imagen'];


        break;

    case "Borrar":

        //------------------------------------------------------------------------------------
        //para borrar la imagen guardada en la carpeta
        $sentenciaSQL = $conexion->prepare("SELECT  imagen FROM libros WHERE id=:id");
        $sentenciaSQL -> bindParam(':id',$txtID);
        $sentenciaSQL -> execute();
        $libro=$sentenciaSQL->fetch(PDO::FETCH_LAZY);

        //verificar si existe la imagen:

        if(isset ($libro["imagen"]) && ($libro['imagen']!="imagen.jpg")){

            //verifica si el archivo existe en la ruta indicada
            if(file_exists("../../img/".$libro["imagen"])){
                unlink("../../img/".$libro["imagen"]);
            }
        }
        //------------------------------------------------------------------------------------

        //Borrar el registro desde la base de datos
        //------------------------------------------------------------------------------------
        $sentenciaSQL = $conexion->prepare("DELETE FROM libros WHERE id=:id");
        $sentenciaSQL -> bindParam(':id',$txtID);
        $sentenciaSQL -> execute();
        //echo "Presionaste boton Borrar";
        break;
         //------------------------------------------------------------------------------------

}
//Seleccioname todos los libros que estan en la tabla libros
$sentenciaSQL = $conexion->prepare("SELECT * FROM libros");
//Ejecuta la instruccion
$sentenciaSQL -> execute();
//Recupera todos los registros y se almacena en la varible, (El FETCH_ASSOC genera una sociacion entre los datos )
$listaLibros=$sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);


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
            <input type="text" class="form-control" value="<?php echo $txtID; ?>"name="txtID" id="textID"  placeholder="ID">
            </div>

            <div class = "form-group">
            <label for="txtNombre">Nombre: </label>
            <input type="text" class="form-control" value="<?php echo $txtNombre; ?>" name="txtNombre" id="textID"  placeholder="Nombre del libro">
            </div> 

            <div class = "form-group">
            <label for="txtImagen">Imagen: </label>
            "<?php echo $txtImagen ; ?>
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
            <!--muestra la informacion de la base de datos por su id, nombre, imagen-->
            <?php foreach($listaLibros as $libro) { ?>
            <tr>
                <td><?php echo $libro['id']; ?></td>
                <td><?php echo $libro['nombre']; ?></td>
                <td><?php echo $libro['imagen']; ?></td>

                <td>

                <form method="POST">

                    <input type="hidden" name="txtID" id="txtID" value="<?php echo $libro['id']; ?>" />
                    <input type="submit" name="accion" value="Seleccionar" class="btn btn-primary" />
                    <input type="submit" name="accion" value="Borrar" class="btn btn-danger" />

                </form>
                </td>

            </tr>
        <?php }?>

        </tbody>
    </table>
</div>

<?php include('../template/pie.php') ?>