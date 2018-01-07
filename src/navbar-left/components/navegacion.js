import React from 'react'

import {a} from 'react-router-dom'

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
            <a href={"/"}>
              <img src={IconDash} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Dashboard</span>
            </a>
          </li>
          <li className="Navegacion-li">
            <a href={"/"}>
              <img src={IconVentas} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Ventas</span>
            </a>
          </li>
          <li className="Navegacion-li">
            <a href={"/"}>
              <img src={IconPackage} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Productos</span>
            </a>
          </li>
          <li className="Navegacion-li">
            <a href={"/"}>
              <img src={IconCart} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Compras</span>
            </a>
          </li>
          <li className="Navegacion-li">
            <a href={"/"}>
              <img src={IconSilhouette} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Proveedores</span>
            </a>
          </li>
          <li className="Navegacion-li">
            <a href={"/"}>
              <img src={IconCalculator} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Contabilidad</span>
            </a>
          </li>
          <li className="Navegacion-li">
            <a href={"/"}>
              <img src={IconUser} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Usuarios</span>
            </a>
          </li>
          <li className="Navegacion-li">
            <a href={"/"}>
              <img src={IconDash} width={20} className="Navegacion-imagen" />
              <span className="Navegacion-txt">Ajustes</span>
            </a>
          </li>
        </ul>
      </div>
    )
}

export default Navegacion
