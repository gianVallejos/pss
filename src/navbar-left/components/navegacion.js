import React from 'react'

import {Link} from 'react-router-dom'

import './navegacion.css'

import IconDash from '../../images/iconos/nav/dashboard.svg'
import IconVentas from '../../images/iconos/nav/badge.svg'
import IconPackage from '../../images/iconos/nav/package.svg'
import IconCart from '../../images/iconos/nav/cart.svg'
import IconSilhouette from '../../images/iconos/nav/silhouette.svg'
import IconCalculator from '../../images/iconos/nav/calculator.svg'
import IconUser from '../../images/iconos/nav/user.svg'
import IconSettings from '../../images/iconos/nav/settings.svg'

function Navegacion(props){
    return(
      <div id="navegacion" className="Navegacion">
        <ul className="Navegacion-ul">
          <li className="Navegacion-li">
            <Link to={"/"}>
              <img src={IconDash} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Dashboard</span>
            </Link>
          </li>
          <li className="Navegacion-li">
            <Link to={"/"}>
              <img src={IconVentas} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Ventas</span>
            </Link>
          </li>
          <li className="Navegacion-li">
            <Link to={"/"}>
              <img src={IconPackage} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Productos</span>
            </Link>
          </li>
          <li className="Navegacion-li">
            <Link to={"/"}>
              <img src={IconCart} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Compras</span>
            </Link>
          </li>
          <li className="Navegacion-li">
            <Link to={"/"}>
              <img src={IconSilhouette} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Proveedores</span>
            </Link>
          </li>
          <li className="Navegacion-li">
            <Link to={"/"}>
              <img src={IconCalculator} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Contabilidad</span>
            </Link>
          </li>
          <li className="Navegacion-li">
            <Link to={"/"}>
              <img src={IconUser} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Usuarios</span>
            </Link>
          </li>
          <li className="Navegacion-li">
            <Link to={"/"}>
              <img src={IconDash} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Ajustes</span>
            </Link>
          </li>
        </ul>
      </div>
    )
}

export default Navegacion
