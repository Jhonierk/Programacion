<?php include("template/cabecera.php"); ?>

<?php 

include("admin/config/bd.php");

//Seleccioname todos los libros que estan en la tabla libros
$sentenciaSQL = $conexion->prepare("SELECT * FROM libros");
//Ejecuta la instruccion
$sentenciaSQL -> execute();
//Recupera todos los registros y se almacena en la varible, (El FETCH_ASSOC genera una sociacion entre los datos )
$listaLibros=$sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);

?>

<?php foreach($listaLibros as $libro){ ?>

<div class="col-md-3">   
<div class="card">

    <img class="card-img-top" src="./img/<?php echo $libro['imagen']; ?>" height="300" alt="">

    <div class="card-body">
        <h4 class="card-title"><?php echo $libro['nombre']; ?> </h4>
        <a name="" id="" class="btn btn-primary" href="#" role="button">Ver libro</a>
    </div>

</div>
</div>

<?php } ?>


<?php include("template/pie.php"); ?>