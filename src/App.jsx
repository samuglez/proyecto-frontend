import React from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom'


import FormuCursos from './components/FormuCursos'
import FormuLogin from './components/FormuLogin'
import FormuPost from './components/FormuPost'
import Error from './components/Error'
import MostrarUsuarios from './components/MostrarUsuarios'
import MostrarCursos from './components/MostrarCursos'
import Inicio from './components/Inicio'
import LogOut from './components/LogOut'
import './Style.css';
// import ModificarCurso from './components/ModificarCurso'

const App = () => {
    const datosUsuario = localStorage.getItem("DatosUsuario");
    const datosRecuperar = datosUsuario ? JSON.parse(datosUsuario) : null;
    const [tieneAcceso, setTieneAcceso] = useState(datosRecuperar !== null);
    // const [tieneAcceso, setTieneAcceso] = useState(false);
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
                    {!tieneAcceso ? (<div>
                        <NavLink className={'navlink'} to='/'>Inicio</NavLink>
                        <NavLink className={'navlink'} to='/login'>Iniciar Sesion</NavLink>
                        <NavLink className={'navlink'} to='/registro'>Registrarse</NavLink>
                    </div>) : (<div>
                        <NavLink className={'navlink'} to='/usuarios'>Docentes</NavLink>
                        <NavLink className={'navlink'} to='/cursos'>Cursos</NavLink>
                        <NavLink className={'navlink'} to='/cursos/crear'>Crear Cursos</NavLink>
                        <NavLink className={'navlink'} to='/logout'>Cerrar Sesion</NavLink>
                    </div>)}
                </div>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/login' element={<FormuLogin gestionarLogin={gestionarLogin} />} />
                    <Route path='/logout' element={<LogOut gestionarLogOut={gestionarLogOut} />} />
                    <Route path='/usuarios' element={<MostrarUsuarios />} />
                    <Route path='/cursos' element={<MostrarCursos />} />
                    <Route path='/registro' element={<FormuPost gestionarLogin={gestionarLogin} />} />
                    <Route path='/cursos/crear' element={<FormuCursos gestionarLogin={gestionarLogin} />} />
                    <Route path='/404' element={<Error />} />
                    <Route path='*' element={<Navigate to='/404' replace />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App