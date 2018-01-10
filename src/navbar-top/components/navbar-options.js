import React from 'react'

import './navbar-options.css'
import notificacionImg from '../../images/iconos/header/bell.svg'
import logoutImg from '../../images/iconos/header/exit.svg'
import arrowDown from '../../images/iconos/header/arrow-down.svg'

import {Link} from 'react-router-dom'

function NavbarOptions(props){
    return(
        <div className="NavbarOptions">
          <div className="NavbarOptions-notificaciones">
            <img src={notificacionImg} width={17} />
            <img src={arrowDown} width={10} />
          </div>
          <Link to="/login">
          <div className="NavbarOptions-cerrar">
            <img src={logoutImg} width={35} />
              <span className="NavbarOptions-icono">Cerrar sesión</span>
          </div>
          </Link>
        </div>
    )
}

export default NavbarOptions
