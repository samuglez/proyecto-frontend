import React from 'react'

const Usuarios = ({ muestra }) => {
    return (
        <div className='card bg-info mb-3' style={{ width: '22rem' }}>
            <div className='card-header  bg-primary text-light'>Usuarios</div>
            <div className='card-body'>
                <h6 className='text-light'>{`Docente: ${muestra.nombre}`}</h6>
                <h6 className='text-light'>{`Email: ${muestra.email}`}</h6>
                <h6 className='text-light'>{`Password: ${muestra.password}`}</h6>
                <h6 className='text-light'>{`Cursos: ${muestra.curso}`}</h6>
            </div>
        </div>
    )
}

export default Usuarios