import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { Login } from './Login';

import Avatar3Image from '../../img/Avatar3.png';
import SkyAnimeImage from '../../img/SkyAnime.png';

export const Registrar = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { actions } = useContext(Context)

  const submit = async (event) => {
    event.preventDefault()
    try {
      const registro = await actions.registro(email, password)
      alert("se ha registrado el usuario")

    }
    catch (error) { console.log(error) }

  }
  return (
    <div>
      <div className="container" style={{ background: `url(${SkyAnimeImage})`, backgroundSize: 'cover', textAlign: 'center', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '40px' }}>
        <img src={Avatar3Image} alt="avatar2" width="200" height="200" className="rounded-circle" />
        <form onSubmit={submit} id="miFormulario">
          <div className="row" style={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ color: "black", textAlign: "center", marginTop: '30px' }}>Completa los datos que faltan</h3>
            <div className="col">
              <label htmlFor="email"><strong>Email</strong></label>
              <input id="email" className="form-control form-control-lg text-center" type="text" placeholder="Escribe tu email" required value={email} onChange={(event) => { setEmail(event.target.value) }} />
            </div>
            <div className="col">
              <label htmlFor="password"><strong>Password</strong></label>
              <input id="password" className="form-control form-control-lg text-center" type="password" placeholder="Escribe tu contraseña" required value={password} onChange={(event) => { setPassword(event.target.value) }} />
            </div>
          </div>
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col text-center">
              <button type="submit" className="btn" style={{ marginBottom: '20px' }}>Guardar Datos</button>
            </div>
          </div>
        </form>
      </div>

      <div className="row" style={{ marginTop: 20 }}>
        <div className="col text-center">
          <Link to="/" className="btn">Volver al Inicio</Link>
        </div>
      </div>
    </div>
  );
}
