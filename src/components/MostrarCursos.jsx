import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cursos from './Cursos'

const MostrarCursos = () => {
    const URL = "https://refreshing-mark-361708.nw.r.appspot.com/api/cursos"
    const [mostrarCurso, setMostrarCurso] = useState([]);
    const mostrar = async () => {
        try {
            const respuesta = await axios.get(URL);
            setMostrarCurso(respuesta.data.curso);
        } catch (error) {
            console.log(error.toJSON());
        }
    };
    useEffect(() => { mostrar() }, []);
    console.log(mostrarCurso);
    return (
        <div className='container'>
            {mostrarCurso.map((muestra) => {
                return (<Cursos key={muestra.id} muestra={muestra} />)
            })}
        </div>
    )
}

export default MostrarCursos