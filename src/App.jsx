import React from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom'

import FormuCursos from './components/FormuCursos'
import FormuLogin from './components/FormuLogin'
import FormuPost from './components/FormuPost'
import Error from './components/Error'
import MostrarUsuarios from './components/MostrarUsuarios'
import Inicio from './components/Inicio'
import LogOut from './components/LogOut'
import './Style.css';

const App = () => {
    const [tieneAcceso, setTieneAcceso] = useState(false);
    const [datos, setDatos] = useState({});
    // const [datosLogout, setDatosLogout] = useState({});
    const [token, setToken] = useState();

    const gestionarLogin = (dato) => {
        setDatos(dato);
        setTieneAcceso(true);
        setToken(dato.token);
    }
    const gestionarLogOut = () => {
        setTieneAcceso(false)
    }
    return (
        <div>
            <Router>
                <div className='navbar'>
                    {tieneAcceso === false ? (<div>
                        <NavLink to='/'>Inicio</NavLink>
                        <NavLink to='/login'>Iniciar Sesion</NavLink>
                        <NavLink to='/registro'>Registrarse</NavLink>
                    </div>) : (<div>
                        <NavLink to='/usuarios'>Docentes</NavLink>
                        <NavLink to='/cursos'>Crear Cursos</NavLink>
                        <NavLink to='/logout'>Cerrar Sesion</NavLink>
                    </div>)}
                </div>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/login' element={<FormuLogin gestionarLogin={gestionarLogin} />} />
                    <Route path='/logout' element={<LogOut gestionarLogOut={gestionarLogOut} />} />
                    <Route path='/usuarios' element={<MostrarUsuarios />} />
                    <Route path='/registro' element={<FormuPost />} />
                    <Route path='/cursos' element={<FormuCursos />} />
                    <Route path='/404' element={<Error />} />
                    <Route path='*' element={<Navigate to='/404' replace />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App