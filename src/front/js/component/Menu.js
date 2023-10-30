import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

import Avatar4Image from '../../img/Avatar4.png';


export const Menu = (props) => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    const [reg, setReg] = useState("")

    function cerrarSesion() {
        sessionStorage.removeItem('token'); // Elimina el token de sesión
        navigate('/'); // Redirige al usuario a la página de inicio de sesión
    }

    return (
        <>
            <div className="container" style={{ background: '#B3E0F2', textAlign: 'center', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: "40px" }}>
                <div className="h4" style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: 'bold' }}>
                        Bienvenido
                    </p>
                    <p>
                        {store.email !== "" ? store.email.toUpperCase() : "Usuario no registrado"}
                    </p>
                </div>
                <nav className="navbar navbar-expand-lg" style={{ marginTop: 40 }}>
                    <div className="container-fluid" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={Avatar4Image} alt="avatar" width="180" height="180" className="rounded-circle" />
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <button type="submit" className="btn" style={{ backgroundColor: "#6F4366", marginBottom: '40px' }} onClick={cerrarSesion}>Cerrar Sesión</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
