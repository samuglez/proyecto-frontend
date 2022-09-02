import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom'

import FormuCursos from './components/FormuCursos'
import FormuLogin from './components/FormuLogin'
import FormuPost from './components/FormuPost'
import Error from './components/Error'
import Inicio from './components/Inicio'

const App = () => {
    // const [tieneAcceso, setTieneAcceso] = useState(false);
    // const [datos, setDatos] = useState({});
    // const [datosLogout, setDatosLogout] = useState({});
    // const [token, setToken] = useState();

    // const gestionarLogin = (dato) => {
    //     setDatos(dato);
    //     setTieneAcceso(true);
    //     setToken(dato.token);
    //     console.log(tieneAcceso);
    // }
    return (
        <div>
            <Router>
                <div className='navbar navbar-expand-lg bg-info navbar-brand'>
                    <div className='container-fluid'><NavLink to='/'>Inicio</NavLink></div>
                    <div className='container-fluid'><NavLink to='/login'>Login</NavLink></div>
                    <div className='container-fluid'><NavLink to='/usuarios'>Registrarse</NavLink></div>
                    <div className='container-fluid'><NavLink to='/cursos'>Crear Cursos</NavLink></div>
                </div>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/login' element={<FormuLogin />} />
                    <Route path='/usuarios' element={<FormuPost />} />
                    <Route path='/cursos' element={<FormuCursos />} />
                    <Route path='/404' element={<Error />} />
                    <Route path='*' element={<Navigate to='/404' replace />} />
                </Routes>
                {/* <div className='d-flex flex-wrap justify-content-around mt-3 border border-primary width: 50%'><FormuLogin /></div>
                <div className='d-flex flex-wrap justify-content-around mt-3'><FormuPost /></div> */}
            </Router>
        </div>
    )
}

export default App