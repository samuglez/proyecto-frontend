import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const FormuLogin = () => {

    const URL = "http://localhost:5000/api/usuarios/login"

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const postUsuario = async (e) => {
        try {
            console.log(Email);
            console.log(Password);
            const response = await axios.post(URL, {
                email: Email,
                password: Password
            })
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
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
        <div className='d-flex flex-wrap justify-content-around mt-3'>

            <form>
                <h1>Login</h1>
                {error ? <h3>Debe completar todos los campos</h3> : null}

                <div className="form-group row">
                    <label htmlFor="Email" className='col-sm-4 col-form-label'>Email: </label><br />
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="Email" id="email" value={Email} onChange={gestorEmail} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Password" className='col-sm-4 col-form-label'>Contraseña: </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Contraseña" id="password" value={Password} onChange={gestorPassword} /><br />
                    </div>
                </div>
                <div className="form-group row">
                    <input type="button" className="btn btn-primary" id="submit" value="Login" onClick={postUsuario} />
                </div>

            </form>
        </div>
    )
}

export default FormuLogin