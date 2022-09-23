<?php include("template/head.php"); ?>


<section class="d-flex justify-content-center align-items-center">
        <div class="card shadow col-xs-12 col-sm-6 col-md-6 col-lg-4   p-4"> 
            <div class="mb-4 d-flex justify-content-start align-items-center">
              
                <h4>  <i class="bi bi-chat-left-quote"></i> &nbsp; Contacto</h4>
            </div>
            <div class="mb-1">
            <form method="post">
                    <div class="mb-4 d-flex justify-content-between"> 
                        <div>
                            <label for="nombre"> <i class="bi bi-person-fill"></i> Nombre</label>
                            <input type="text" class="form-control" name="nombre" id="nombre" placeholder= "ej: Gabriel" required>
                            <div class="nombre text-danger "></div>
                        </div>
                        <div >
                            <label for="apellido"> <i class="bi bi-person-bounding-box"></i> Apellido</label>
                            <input type="text" class="form-control" name="apellido" id="apellido" placeholder= "ej: Pacheco" required>
                            <div class="apellido text-danger"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="correo"><i class="bi bi-envelope-fill"></i> Correo</label>
                        <input type="email" class="form-control" name="correo" id="correo" placeholder= "ej: gpmcheco@mail.com" required>
                        <div class="correo text-danger"></div>
                        
                    </div> 
                    <div class="mb-4">
                        <label for="sexo"><i class="bi bi-gender-ambiguous"></i> Sexo: </label>
                        <input type="radio" class="form-check-input"  name="sexo"  value="masculino" > Masculino
                        <input type="radio" class="form-check-input" name="sexo"  value="femenino" > Femenino
                        <div class="sexo text-danger"></div>
                    </div>  
                    <div class="mb-4">
                        <label for="mensaje"> <i class="bi bi-chat-right-dots-fill" required></i> Mensaje</label>
                        <textarea name="mensaje" id="mensaje" class="form-control" placeholder="ej: hola"></textarea>
                        <div class="mensaje text-danger"></div>
                    </div> 
                    
                    <div class="mb-2">
                        <input type="submit" name="enviar" id ="botton" class="col-12 btn btn-primary d-flex justify-content-between ">
                            <i id="icono" class="bi bi-cursor-fill "></i>
                        
                    </div> 
                              
                </form>
                <?php
                include("registro.php")
                ?>
            </div>
        </div>
    </section>


<?php include("template/footer.php"); ?>