import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const FormuLogin = (props) => {
    // const URL = 'http://localhost:5000/api/usuarios/login'
    const URL = "https://refreshing-mark-361708.nw.r.appspot.com/api/usuarios/login"
    const { gestionarLogin } = props;
    const navegar = useNavigate();


    const [tieneAcceso, setTieneAcceso] = useState(false);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState(false);


    const postUsuario = async (e) => {
        e.preventDefault()
        if (!tieneAcceso) {
            try {
                await axios.post(URL, {
                    email: Email,
                    password: Password
                }).then((response) => {
                    console.log('Login correcto');
                    gestionarLogin(response.data)
                    console.log(response.data);
                    console.log(response.data.userId);
                    localStorage.setItem('DatosUsuario', JSON.stringify({
                        userId: response.data.userId,
                        token: response.data.token
                    }))
                    navegar('/usuarios');
                })
            } catch (error) {
                console.log(error.message);
            }
        }
        setError(false);
        if (Email.trim() === '' || Password.trim() === '') {
            setError(true);
            return;
        }
        setEmail('');
        setPassword('');
    }


    const gestorEmail = (e) => {

        setEmail(e.target.value)
    };
    const gestorPassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => { }, []);

    return (
        <div>

            <form>
                <h1>Conectarse</h1>
                {error ? <h3>Debe completar todos los campos</h3> : null}

                <div>
                    <label htmlFor="Email">Email: </label><br />
                    <div>
                        <input type="email" placeholder="Email" id="email" value={Email} onChange={gestorEmail} /><br />
                    </div>
                </div>
                <div>
                    <label htmlFor="Password">Contraseña: </label>
                    <div>
                        <input type="password" placeholder="Contraseña" id="password" value={Password} onChange={gestorPassword} /><br />
                    </div>
                </div>
                <div>
                    <input type="button" id="submit" value="Login" onClick={postUsuario} />
                </div>

            </form>
        </div>
    )
}

export default FormuLogin