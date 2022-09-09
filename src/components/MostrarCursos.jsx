import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cursos from './Cursos'


const MostrarCursos = () => {
    // const URL = "https://refreshing-mark-361708.nw.r.appspot.com/api/cursos"
    const URL = "http://localhost:5000/api/cursos";
    const [mostrarCurso, setMostrarCurso] = useState([]);
    const mostrar = async () => {
        try {
            const respuesta = await axios.get(URL);
            setMostrarCurso(respuesta.data.cursos);
            console.log(respuesta.data);
        } catch (error) {
            console.log(error.toJSON());
        }
    };
    useEffect(() => { mostrar() }, []);
    console.log(mostrarCurso);
    return (
        <div>
            <div className='container'>
                {mostrarCurso.map((muestra) => {
                    return (<Cursos key={muestra._id} muestra={muestra} />)
                })}
            </div>
        </div>
    )
}

export default MostrarCursos