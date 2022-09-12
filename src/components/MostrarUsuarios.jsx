import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Usuarios from './Usuarios'
// import Buscar from './Buscar'

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
        <div>
            {/* <Buscar /> */}
            <div className='container'>
                {mostrarUser.map((muestra) => {
                    return (<Usuarios key={muestra._id} muestra={muestra} />)
                })}

            </div>
        </div>
    )
}

export default MostrarUsuarios