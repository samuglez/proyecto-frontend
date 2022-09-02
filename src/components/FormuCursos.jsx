import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const FormuCursos = () => {
    const URL = "http://localhost:5000/api/cursos"
    const [curso, setCurso] = useState('')
    const [docente, setDocente] = useState('');
    const [opcion, setOpcion] = useState('');
    const [aula, setAula] = useState('');
    const [precio, setPrecio] = useState('');
    const [error, setError] = useState(false);

    const extraerDatosDeUsuario = () => {
        const datosRecuperar = JSON.parse(localStorage.getItem('DatosUsuario'));
        if (datosRecuperar && datosRecuperar.token) {
            return [datosRecuperar.token, datosRecuperar.userId];
        }
    };
    extraerDatosDeUsuario();
    const postCurso = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URL, {
                curso: curso,
                docente: extraerDatosDeUsuario()[1],
                opcion: opcion,
                aula: aula,
                precio: precio,
            }, { headers: { Authorization: 'Bearer ' + extraerDatosDeUsuario()[0] } }).then((response) => {
                console.log('Curso añadido correctamente');
                console.log(response.data);
            })
        } catch (error) {
            console.log(error.message);
        }
        setError(false);
        if (curso.trim() === '' || opcion.trim() === '' || aula.trim() === '' || precio.trim() === '') {
            setError(true);
            return;
        }
        // post(nombre, email, password)
        setCurso('');
        setDocente('');
        setOpcion('');
        setAula('');
        setPrecio('');
    }

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

    useEffect(() => { extraerDatosDeUsuario() }, []);
    return (
        <div className='d-flex flex-wrap justify-content-around mt-3'>

            <form>
                <h1>Crear Curso</h1>
                {error ? <h3>Debe completar todos los campos</h3> : null}
                <div className="form-group row">
                    <label htmlFor="curso" className='col-sm-4 col-form-label'>Curso: </label><br />
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Curso" id="curso" value={curso} onChange={gestorCurso} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="docente" className='col-sm-4 col-form-label'>Docente: </label><br />
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Docente" id="docente" value={docente} onChange={gestorDocente} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="opcion" className='col-sm-4 col-form-label'>Opcion: </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Opcion" id="opcion" value={opcion} onChange={gestorOpcion} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="aula" className='col-sm-4 col-form-label'>Aula: </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Aula" id="aula" value={aula} onChange={gestorAula} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="precio" className='col-sm-4 col-form-label'>Precio: </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Precio" id="precio" value={precio} onChange={gestorPrecio} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <input type="button" className="btn btn-primary" id="submit" value="Registrarse" onClick={postCurso} />
                </div>

            </form>
            {/* <div className='d-flex flex-wrap justify-content-around mt-3'>
                {mostrarUser.map((muestra) => {
                    return (<Usuarios key={muestra.id} muestra={muestra} />)
                })}
            </div> */}
        </div>
    )
}

export default FormuCursos