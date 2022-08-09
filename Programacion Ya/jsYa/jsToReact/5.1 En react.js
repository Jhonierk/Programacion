//Normalmente es asi en react
function ListaDeTareas(){
    return(
        <ul>

            {listado.map(function(elemento){

                return(<li>{elemento.nombre}</li>);

            })}
            
        </ul>
    )
}

//En react agregando funcion flechas seria asi:

function Lista(){
    return(
        <ul>
            {listado.map(elemento => (<li>{elemento.nombre}</li>))}
        </ul>
    )
}