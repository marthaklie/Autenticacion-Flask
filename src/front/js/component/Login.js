import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';
import { Registrar } from './Registrar';
import { Context } from '../store/appContext';

import AvatarImage from '../../img/Avatar.png';
import BlueAnimeImage from '../../img/BlueAnime.png';


export const Login = () => {
  const [miLogin, setMiLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { store, actions } = useContext(Context)

  const divStyle = {
    background: `url(${BlueAnimeImage})`,  // Establece la imagen de fondo
    backgroundSize: 'cover',  // Ajusta el tamaño de la imagen de fondo
    textAlign: 'center',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: "40px"
  };

  const iniciarSesion = (e) => {
    e.preventDefault();

    if (email === 'admin' && password === '123') {
      actions.updateEmail(email)
      // Simulación de inicio de sesión exitoso
      sessionStorage.setItem('token', 'yourAuthToken');
      setMiLogin(true);
      navigate('/private');
    } else {
      alert('Error de usuario y/o contraseña');
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token) {
      setMiLogin(true);
    } else {
      setMiLogin(false);
    }
  }, []);

  return (
    <div className="container" style={divStyle}>
      <img src={AvatarImage} alt="avatar" width="180" height="180" className="rounded-circle" />
      <form onSubmit={iniciarSesion}>
        <div>
          <br />
          <h3 style={{ color: "black", textAlign: "center" }}>Bienvenido</h3>
          <h4 style={{ color: "black" }}> Si ya tienes cuenta, inicia sesión</h4>
          <br />
          <label htmlFor="email"><strong>Email</strong></label>
          <input type="text" id="email" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password"><strong>Password</strong>
          </label>
          <input type="password" id="password" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setPassword(e.target.value)} required />
        </div><br />
        <div className="text-center">
          <input type="submit" className="btn" value="Login" />
        </div>
      </form>


      <div className="nueva_cuenta" style={{ marginTop: 20 }}>
        <div> <h4 style={{ color: "black" }}> Si no tienes cuenta, ¡crea una!</h4>
          <br />

          {/* Agrego un botón para redirigir al componente "Registrar" */}
          <Link to="/registrar" className="btn" style={{ marginBottom: '20px' }}>Crear cuenta</Link>
        </div>
      </div>
    </div>
  );
}