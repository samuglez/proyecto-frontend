import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModificarCurso from './ModificarCurso'

const FormuCursos = (props) => {
    const URL = 'http://localhost:5000/api/cursos'
    // const URL = "https://refreshing-mark-361708.nw.r.appspot.com/api/cursos"
    const { gestionarLogin } = props;
    const navegar = useNavigate();
    const [curso, setCurso] = useState('')
    const [docente, setDocente] = useState('');
    const [opcion, setOpcion] = useState('');
    const [aula, setAula] = useState('');
    const [precio, setPrecio] = useState('');
    const [error, setError] = useState(false);
    const [tieneAcceso, setTieneAcceso] = useState(false);

    const extraerDatosDeUsuario = () => {
        const datosRecuperar = JSON.parse(localStorage.getItem('DatosUsuario'));
        if (datosRecuperar && datosRecuperar.token) {
            return [datosRecuperar.token, datosRecuperar.userId];
        }
    };
    console.log(extraerDatosDeUsuario());
    // extraerDatosDeUsuario();
    const postCurso = async (e) => {
        e.preventDefault();
        if (!tieneAcceso) {
            try {
                await axios.post(URL, {
                    curso: curso,
                    docente: extraerDatosDeUsuario()[1],
                    opcion: opcion,
                    aula: aula,
                    precio: precio,
                }, { headers: { Authorization: 'Bearer ' + extraerDatosDeUsuario()[0] } }).then((response) => {
                    console.log('Curso añadido correctamente');
                    gestionarLogin(response.data)
                    console.log(response.data);
                })
                navegar('/cursos/crear');
            } catch (error) {
                console.log(error.message);
            }
        }

        setError(false);
        if (curso.trim() === '' || opcion.trim() === '' || aula.trim() === '' || precio.trim() === '') {
            setError(true);
            return;
        }
        setCurso('');
        setDocente('');
        setOpcion('');
        setAula('');
        setPrecio('');
    }
    const [cursos, setCursos] = useState([]);

    const getCursos = async () => {
        try {
            const response = await axios.get(URL, {
                headers: {
                    Authorization: "Bearer " + extraerDatosDeUsuario()[0],
                },
            });
            setCursos(response.data.cursos);
        } catch (e) {
            console.log(e.message);
        }
    };

    const gestorCurso = (e) => {

        setCurso(e.target.value)
    };
    const gestorDocente = (e) => {

        setDocente(e.target.value)
    };
    const gestorOpcion = (e) => {
        setOpcion(e.target.value);
    };
    const gestorAula = (e) => {
        setAula(e.target.value);
    };
    const gestorPrecio = (e) => {
        setPrecio(e.target.value);
    };

    // useEffect(() => { extraerDatosDeUsuario() }, []);
    useEffect(() => { getCursos() }, []);
    return (
        <div>

            <form>
                <h1>Crear Curso</h1>
                {error ? <h3>Debe completar todos los campos</h3> : null}
                <div>
                    <label htmlFor="curso">Curso: </label><br />
                    <div>
                        <input type="text" placeholder="Curso" id="curso" value={curso} onChange={gestorCurso} /><br />
                    </div>
                </div>
                <div>
                    <label htmlFor="docente">Docente: </label><br />
                    <div>
                        <input type="text" placeholder="Docente" id="docente" value={docente} onChange={gestorDocente} /><br />
                    </div>
                </div>
                <div>
                    <label htmlFor="opcion">Opcion: </label>
                    <div className="col-sm-10">
                        <select name="opcion" id="opcion" onChange={gestorOpcion} >
                            <option value=''>Seleccione una opcion</option>
                            <option value='Presencial'>Presencial</option>
                            <option value='Online'>Online</option>
                            <option value='Semi-presencial'>Semi-presencial</option>
                        </select ><br />
                    </div>
                </div>
                <div>
                    <label htmlFor="aula">Aula: </label>
                    <div className="col-sm-10">
                        <select name="aula" id="aula" onChange={gestorAula} >
                            <option value=''>Seleccione una opcion</option>
                            <option value='Aula-1'>Aula-1</option>
                            <option value='Aula-2'>Aula-2</option>
                            <option value='Aula-3'>Aula-3</option>
                            <option value='Aula-4'>Aula-4</option>
                            <option value='Aula-5'>Aula-5</option>
                            <option value='Aula-Virtual'>Aula-Virtual</option>
                        </select ><br />
                    </div>
                </div>
                <div>
                    <label htmlFor="precio">Precio: </label>
                    <div className="col-sm-10">
                        <input type="text" placeholder="Precio" id="precio" value={precio} onChange={gestorPrecio} /><br />
                    </div>
                </div>
                <div>
                    <input type="button" id="submit" value="Crear" onClick={postCurso} />
                </div>

            </form>
            <div className='modificar'>
                {cursos.filter((filter) => {
                    return filter.docente._id === extraerDatosDeUsuario()[1];
                })
                    .map((curs) => {
                        return <ModificarCurso cursos={curs} key={curs._id} />;
                    })}
            </div>
        </div>
    )
}

export default FormuCursos