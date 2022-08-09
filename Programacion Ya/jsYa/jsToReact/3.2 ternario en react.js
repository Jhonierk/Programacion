function ListaTareas ({tareas}){
    return (
        //Se comprueba si tiene tareas
        <React.Fragment>
            {tareas.length ? (
                <ul>
                    {tareas.map}
                </ul>
            ) : (
                //Si en tarea no hay nada...
                <div>No hay tareas</div>
            )}
        </React.Fragment>
    )
}