import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Usuarios from './Usuarios'

const MostrarUsuarios = () => {
    const URL = "https://refreshing-mark-361708.nw.r.appspot.com/api/usuarios"
    const [mostrarUser, setMostrarUser] = useState([]);
    const mostrar = async () => {
        try {
            const respuesta = await axios.get(URL);
            setMostrarUser(respuesta.data.usuario);
        } catch (error) {
            console.log(error.toJSON());
        }
    };
    useEffect(() => { mostrar() }, []);
    console.log(mostrarUser);
    return (
        <div className='container'>
            {mostrarUser.map((muestra) => {
                return (<Usuarios key={muestra.id} muestra={muestra} />)
            })}
        </div>
    )
}

export default MostrarUsuarios