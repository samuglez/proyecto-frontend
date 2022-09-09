import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Buscando from './Buscando'

const Buscar = () => {
    const [query, setQuery] = useState('')
    const [datos, setDatos] = useState([])

    const gestorBusca = (e) => {
        setQuery(e.target.value)
    }

    const gestorTecla = (e) => {
        const tecla = e.target.value
        console.log(tecla);
    }

    useEffect(() => {
        const recupera = async () => {
            if (query.length === 0) {
                const res = await axios.get('http://localhost:5000/api/cursos');
                setDatos(res.data.cursos);
            } else {
                const res = await axios.get(`http://localhost:5000/api/cursos/buscar/${query}`);
                setDatos(res.data.cursos)
            }
        }
        recupera()
    }, [query])
    return (
        <div className='buscar'>
            <input type="text" name='busca' placeholder='Buscar' onChange={gestorBusca} onKeyDown={gestorTecla} />
            <div>
                <Buscando datos={datos} />
            </div>
        </div>
    )
}

export default Buscar