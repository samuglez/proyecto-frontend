import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = (props) => {
    const { gestionarLogOut } = props;
    const navegar = useNavigate();
    useEffect(() => {
        gestionarLogOut();
        localStorage.removeItem('DatosUsuarios');
        navegar('/login');
    }, [])
    return (
        <div>Logged out...</div>
    )
}

export default LogOut