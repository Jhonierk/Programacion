
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
    $valor = rand(1, 1000);
    echo "El valor sorteado es $valor<br>";

    if($valor < 10){
        echo "El valor tiene solo un digito";
    }elseif($valor < 100){
        echo "El valor tiene dos digitos";
    }elseif($valor < 1000){
        echo "El valor tiene 3 digitos";
    }else{
        echo "El valor tiene mas de 3 digitos";
    }
    
?>
</body>
</html>
