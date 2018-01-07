import React from 'react'

import './navbar-options.css'
import notificacionImg from '../../images/iconos/header/bell.svg'
import logoutImg from '../../images/iconos/header/exit.svg'
import arrowDown from '../../images/iconos/header/arrow-down.svg'

function NavbarOptions(props){
    return(
        <div className="NavbarOptions">
          <div className="NavbarOptions-notificaciones">
            <img src={notificacionImg} width={17} />
            <img src={arrowDown} width={10} />
          </div>
          <div className="NavbarOptions-cerrar">
            <img src={logoutImg} width={35} />
            <span className="NavbarOptions-icono">Cerrar sesión</span>
          </div>
        </div>
    )
}

export default NavbarOptions
