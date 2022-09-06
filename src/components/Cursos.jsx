import React from 'react'

const Cursos = ({ muestra }) => {
    const muestras = muestra.cursos.map((dato) => { return dato.curso })

    return (
        <div>
            <div className='card'>
                <h2>Docente</h2>
                <h5>{`Nombre: ${muestra.nombre}`}</h5>
                <h5>{`Email: ${muestra.email}`}</h5>
                <h5>{`Cursos: ${muestras}`}</h5>
            </div>
        </div>
    )
}

export default Cursos