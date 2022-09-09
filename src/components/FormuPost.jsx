import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormuPost = (props) => {
    const URL = 'http://localhost:5000/api/usuarios'
    // const URL = "https://refreshing-mark-361708.nw.r.appspot.com/api/usuarios"
    const { gestionarLogin } = props;
    const navegar = useNavigate();
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [tieneAcceso, setTieneAcceso] = useState(false);



    const postUsuario = async (e) => {
        e.preventDefault();
        if (!tieneAcceso)
            try {
                await axios.post(URL, {
                    nombre: nombre,
                    email: email,
                    password: password
                }).then((response) => {
                    console.log('Login correcto');
                    gestionarLogin(response.data)
                    console.log(response.data.token);
                    console.log(response.data.userId);
                    localStorage.setItem('DatosUsuario', JSON.stringify({
                        userId: response.data.userId,
                        token: response.data.token
                    }))
                    navegar('/crearcurso');
                })
            } catch (error) {
                console.log(error.message);
            }
        setError(false);
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '') {
            setError(true);
            return;
        }
        setNombre('');
        setEmail('');
        setPassword('');
    }

    const gestorNombre = (e) => {

        setNombre(e.target.value)
    };
    const gestorEmail = (e) => {

        setEmail(e.target.value)
    };
    const gestorPassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => { }, []);

    return (
        <div className='d-flex flex-wrap justify-content-around mt-3'>

            <form>
                <h1>Registrarse</h1>
                {error ? <h3>Debe completar todos los campos</h3> : null}
                <div className="form-group row">
                    <label htmlFor="nombre" className='col-sm-4 col-form-label'>Nombre: </label><br />
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Nombre" id="nombre" value={nombre} onChange={gestorNombre} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Email" className='col-sm-4 col-form-label'>Email: </label><br />
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="Email" id="email" value={email} onChange={gestorEmail} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Password" className='col-sm-4 col-form-label'>Contraseña: </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Contraseña" id="password" value={password} onChange={gestorPassword} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <input type="button" className="btn btn-primary" id="submit" value="Registrarse" onClick={postUsuario} />
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

export default FormuPost