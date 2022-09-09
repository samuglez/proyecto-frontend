import React from 'react'

const Cursos = ({ muestra }) => {


    return (
        <div>
            <div className='card'>
                <h2>Curso</h2>
                <h5>Curso: {muestra.curso}</h5>
                <h5>Aula: {muestra.aula}</h5>
                <h5>Docente: {muestra.docente.nombre}</h5>
                <h5>Opcion: {muestra.opcion}</h5>
                <h5>Precio: {muestra.precio}</h5>
            </div>
        </div>
    )
}

export default Cursos