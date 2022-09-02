import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
// import Usuarios from './Usuarios'

const FormuPost = () => {
    const URL = "http://localhost:5000/api/usuarios"
    // const [mostrarUser, setMostrarUser] = useState('');
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // const mostrar = async () => {
    //     try {
    //         const respuesta = await axios.get(URL);
    //         setMostrarUser(respuesta.data);
    //     } catch (error) {
    //         console.log(error.toJSON());
    //     }
    // };

    // const post = async (nombre, email, password) => {
    //     try {
    //         const respuesta = await axios.post(URL, {
    //             nombre: nombre,
    //             email: email,
    //             password: password
    //         });
    //         mostrar()
    //         console.log(respuesta.data);
    //     } catch (error) {
    //         console.log(error.toJSON());
    //     }
    // }
    //! Copiar esto para la creacion de curso
    // , {
    //     headers: {
    //         Authorization: 'Bearer ' + e.token, // En los headers van 'Bearer ' + token recibido
    //             }
    //         }).then((response) => {
    //             console.log('Todo correcto', response.data);
    //         })

    const postUsuario = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URL, {
                nombre: nombre,
                email: email,
                password: password
            }).then((response) => {
                console.log('Login correcto');
                console.log(response.data.token);
                console.log(response.data.userId);
                localStorage.setItem('DatosUsuario', JSON.stringify({
                    userId: response.data.userId,
                    token: response.data.token
                }))
            })
        } catch (error) {
            console.log(error.message);
        }
        setError(false);
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '') {
            setError(true);
            return;
        }
        // post(nombre, email, password)
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
                        <input type="nombre" className="form-control" placeholder="Nombre" id="nombre" value={nombre} onChange={gestorNombre} /><br />
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