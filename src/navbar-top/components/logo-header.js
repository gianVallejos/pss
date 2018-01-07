import React from 'react'
import logotipo from '../../images/header-logo.png'
import {Link} from 'react-router-dom'
import './logo-header.css'

function LogoHeader(props){
  return(
    <Link to={"/"} className="LogoHeader">
      <img className="LogoHeader-imagen" src={logotipo} />
      <h1 className="LogoHeader-titulo">{ props.title }</h1>
    </Link>
  )
}

export default LogoHeader
