import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Usuarios from './Usuarios'

const MostrarUsuarios = () => {
    const URL = "http://localhost:5000/api/usuarios"
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
        <div>
            <h1>{mostrarUser.map((muestra) => {
                return (<Usuarios key={muestra.id} muestra={muestra} />)
            })}</h1>
        </div>
    )
}

export default MostrarUsuarios